import React, {useState, useLayoutEffect} from "react"
import {graphql, useStaticQuery} from 'gatsby'
import lunr, { Index as lunrINDEX } from "lunr"

import { useSite } from "@layouts/SiteContext"
import ResultSection from "@search/ResultSection"
import Search from "@search"
import {groupBy} from '@utils'

const Index = ({data, location}) => {
  const { query, filters, AllData } = useSite()

  const { LunrIndex } = useStaticQuery(graphql`
      query LunrInstance {
        LunrIndex
      }
    `)

  const lunrIndx = lunrINDEX.load(LunrIndex.index)
  const {store} = LunrIndex

    let andSearch = []
    const keywords = query
    .trim() // remove trailing and leading spaces
    .replace(/\s/g, "*") // remove user's wildcards
    .toLowerCase()
    .split(/\s+/)

  keywords
    // loop over keywords
    .forEach((el, i) => {
      // per-single-keyword results
      const keywordSearch = lunrIndx
        .query(function(q) {
          lunr.tokenizer(el).forEach(function (token) {
            q.term(token.toString(), { editDistance: el.length > 5 ? 2 : 0 })
          q.term(token.toString(), {
            wildcard:
              lunr.Query.wildcard.LEADING | lunr.Query.wildcard.TRAILING,
          })
          q.term(token.toString(), {fields: ['name'], boost: 10});
          q.term(token.toString(), {fields: ['nameNormalized'], boost: 10});
          q.term(token.toString(), {fields: ['location'], boost: 5});
          q.term(token.toString(), {fields: ['skills'], boost: 3});

            
          })
        })
        .map(({ ref }) => {
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

     filters.map(({label, set}) => ({label: label.replace(/\s/g, "*"), set})).forEach((el, i) => {
      const filterSearch = lunrIndx.query(function (q) {
        lunr.tokenizer(el.label).forEach(function (token) {
          q.term(token.toString(), {
            wildcard:
              lunr.Query.wildcard.LEADING | lunr.Query.wildcard.TRAILING,
          })
          q.term(token.toString(), {presence: lunr.Query.presence.REQUIRED})
          q.term(token.toString(), {fields: [el.set], boost: 10});
        })
        
      }).map(({ref}) => {
        return {
          id: ref, 
          ...store[ref]
        }
      })

      andSearch = andSearch.filter(x => filterSearch.some(el => el.id === x.id))

    });
  const people = andSearch.filter((n) => n.type === 'people').map((d) => {const {node} = AllData[d.type].find(({node}) => node.id === d.id); return ({...d, ...node})});
  const companies = andSearch.filter((n) => n.type === 'companies').map((d) => {const {node} = AllData[d.type].find(({node}) => node.id === d.id); return ({...d, ...node})});

  return (
    <>
      <Search />
      <ResultSection results={people} noun={"someone"}>
        People
      </ResultSection>
      <ResultSection results={companies} noun={"a company"}>
        Companies
      </ResultSection>
    </>
  )
}

export default Index
