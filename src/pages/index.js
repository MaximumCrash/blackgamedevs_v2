/** @jsx jsx */
import React, { useState } from "react"

import { Box, jsx } from "theme-ui"

import { useSite } from "@layouts/SiteContext"
import ResultSection from "@search/ResultSection"
import Search from "@search"
import { groupBy, filterSearchResults } from "@utils"

const Index = ({ data, location }) => {
  const { filters, AllFilters, results, AllData } = useSite()

  const resultsToRender = results.length > 0 ? results : AllData;
  console.log(resultsToRender)

  let peopleResults = [];
  let companyResults = [];
  
  if (Array.isArray(resultsToRender)) { //We've got Search Results.
    const filteredResults = filters.length > 0 ? results.filter((r) => filters.find((f) => r[f.set].find((s) => s.key === f.key))) : results;
  }
  else { //We're rendering using AllData
    peopleResults = Object.values(Object.filter(AllData, entry => !entry.frontmatter.isCompany))
    companyResults = Object.values(Object.filter(AllData, entry => entry.frontmatter.isCompany))
  }

  console.log(peopleResults);
  console.log(companyResults);

  return (
    <Box
      sx={{
        "& > *:last-child > h2 > .jump-section-element": {
          display: "none",
        },
      }}
    >
      <Search />
      <ResultSection
        results={peopleResults}
        noun={"someone"}
        jumpToSection={"Companies"}
      >
        People
      </ResultSection>
      <ResultSection results={companyResults} noun={"a company"}>
        Companies
      </ResultSection>
    </Box>
  )
}

export default Index
