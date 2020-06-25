//** @jsx jsx */
import React from "react"
import { Box, Input, jsx } from "theme-ui"
import { navigate } from "@reach/router"
import lunr, { Index as lunrINDEX } from "lunr"
import { graphql, useStaticQuery } from "gatsby"

import {debounce} from '@utils'
import searchIcon from "@public/search_icon.svg"
import { useSite } from "@layouts/SiteContext"

const SearchInput = () => {
  const { results, setResults } = useSite()

  //Get our LunrIndex from our Gatsby Node.
  const { LunrIndex } = useStaticQuery(graphql`
    query LunrInstance {
      LunrIndex
    }
  `)

  //Tap lunr and load the Index we built during run time.
  const lunrIndx = lunrINDEX.load(LunrIndex.index)
  const { store } = LunrIndex //<- Grab our Store.

  const onSubmit = e => {
    e.preventDefault()
    window.scrollTo({top: 0, behavior: 'smooth'});
  }

  const onChange = (value) => {
    console.log(value)
    let andSearch = [] //<- Array to combine results by AND instead of just OR

    //"Keywords" is taking our query and transforming each word by a space into a keyword to query for.
    const keywords = value
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

    console.log(andSearch);
  }

  return (
    <Box
      sx={{
        mb: 1,
        bg: "background",
      }}
    >
      <Box
        as="form"
        method="GET"
        role="search"
        onSubmit={onSubmit}
        sx={{ position: "relative", mb: "0.5rem" }}
      >
        <img
          src={searchIcon}
          alt="Search Icon"
          sx={{
            position: "absolute",
            left: "15px",
            top: "50%",
            transform: "translateY(-50%)",
            width: "23px",
            opacity: "0.64",
            filter: "invert(80%)",
          }}
        />
        <Input
          name="keywords"
          id="search"
          type="search"
          aria-label="Search"
          placeholder={"Search..."}
          onChange={({ target: { value } }) => debounce(onChange(value), 64)}
          sx={{
            border: "none",
            borderRadius: "100000px",
            letterSpacing: "0.3px",
            "::placeholder": {
              color: "body",
            },
            bg: "border",
            p: "14px",
            pl: "46px",
            pt: "15px",
            fontSize: "1.1rem",
            outline: "none",
            color: "text",
            lineHeight: "1.1rem",
            "::-webkit-search-cancel-button": {
              WebkitAppearance: "none",
            },
          }}
        />
      </Box>
    </Box>
  )
}

export default SearchInput
