import React from "react"

import { useSite } from "@layouts/SiteContext"
import ResultSection from "@search/ResultSection"
import Search from "@search"

const Index = () => {
  const { query, filters } = useSite()

  const people = []
  const companies = []

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
