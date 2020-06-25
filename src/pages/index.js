/** @jsx jsx */
import React, { useState } from "react"


import {Box, jsx} from 'theme-ui'

import { useSite } from "@layouts/SiteContext"
import ResultSection from "@search/ResultSection"
import Search from "@search"
import { groupBy, filterSearchResults } from "@utils"

const Index = ({ data, location }) => {
  const { filters, filterSet } = useSite()

  //Run our search results through our filters.
  //NOTE(Rejon): I could have provided the filter labels to our search,
  //             but because the labels (even normalized) have a lot of spaces,
  //             LUNR will be picky and show incorrect results.
  const peopleResults = []; 
  
  
  // filterSearchResults({
  //   searchResults: andSearch,
  //   type: "people",
  //   filters,
  //   filtersGrouped,
  //   AllData,
  // })

  const companies = [];
  
  // filterSearchResults({
  //   searchResults: andSearch,
  //   type: "companies",
  //   filters,
  //   filtersGrouped,
  //   AllData,
  // })

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
