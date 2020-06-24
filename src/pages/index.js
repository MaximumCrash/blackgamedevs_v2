/** @jsx jsx */
import React, { useState } from "react"
import { graphql, useStaticQuery } from "gatsby"
import lunr, { Index as lunrINDEX } from "lunr"
import {Box, jsx} from 'theme-ui'

import { useSite } from "@layouts/SiteContext"
import ResultSection from "@search/ResultSection"
import Search from "@search"
import { groupBy, filterSearchResults } from "@utils"

const Index = ({ data, location }) => {
  const { query, filters, filterSet, filtersGrouped, AllData } = useSite()

  //Get our LunrIndex from our Gatsby Node.
  const { LunrIndex } = useStaticQuery(graphql`
    query LunrInstance {
      LunrIndex
    }
  `)

  //Tap lunr and load the Index we built during run time.
  const lunrIndx = lunrINDEX.load(LunrIndex.index)
  const { store } = LunrIndex //<- Grab our Store.

  let andSearch = [] //<- Array to combine results by AND instead of just OR

  //"Keywords" is taking our query and transforming each word by a space into a keyword to query for.
  const keywords = query
    .trim() // remove trailing and leading spaces
    .replace(/\s/g, "*") // remove user's wildcards
    .toLowerCase()
    .split(/\s+/) //Split by spaces

  //Run our query
  keywords
    // loop over keywords
    .forEach((el, i) => {
      // per-single-keyword results
      const keywordSearch = lunrIndx
        .query(function (q) {
          //Use our tokenizer
          //NOTE(Rejon): Lunr is PICKY and treats each space in our query as an individual token.
          //             Our tokenizer regex (in gatsby-node.js) isn't perfect, so we do some double checking.
          lunr.tokenizer(el).forEach(function (token) {
            q.term(token.toString(), { editDistance: el.length > 5 ? 2 : 0 }) //<- If our token is longer than 5 characters, let the accidental distance be 2 letters (ie. "A" <- Z,Y,B,C are 2 distances away from A in both directions.)
            q.term(token.toString(), {
              //<- Wildcard treatment for our token specifically.
              wildcard:
                lunr.Query.wildcard.LEADING | lunr.Query.wildcard.TRAILING,
            })
            q.term(token.toString(), { fields: ["name"], boost: 10 }) //<- Boost the value of our query for a specific field.
            q.term(token.toString(), { fields: ["nameNormalized"], boost: 10 })
            q.term(token.toString(), { fields: ["locations"], boost: 5 })
            q.term(token.toString(), { fields: ["skills"], boost: 3 })
          })
        })
        .map(({ ref }) => {
          //<- Map through all of our results based on the id, grab our data from the store by it's id.
          return {
            id: ref,
            ...store[ref],
          }
        })
      // intersect current keywordSearch with andSearch
      andSearch =
        i > 0
          ? andSearch.filter(x => keywordSearch.some(el => el.id === x.id))
          : keywordSearch
    })

  //Run our search results through our filters.
  //NOTE(Rejon): I could have provided the filter labels to our search,
  //             but because the labels (even normalized) have a lot of spaces,
  //             LUNR will be picky and show incorrect results.
  const peopleResults = filterSearchResults({
    searchResults: andSearch,
    type: "people",
    filters,
    filtersGrouped,
    AllData,
  })

  const companies = filterSearchResults({
    searchResults: andSearch,
    type: "companies",
    filters,
    filtersGrouped,
    AllData,
  })

  return (
    <Box sx={{'& > *:last-child > h2 > .jump-section-element': {
      display: 'none'
  }}}>
      <Search />
      <ResultSection results={peopleResults} noun={"someone"} jumpToSection={'Companies'}>
        People
      </ResultSection>
      <ResultSection results={companies} noun={"a company"}>
        Companies
      </ResultSection>
    </Box>
  )
}

export default Index
