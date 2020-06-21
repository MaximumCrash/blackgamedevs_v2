import React, {
  createContext,
  useContext,
  useState,
  useLayoutEffect,
} from "react"
import { useStaticQuery, graphql } from "gatsby"
import { useLocation } from "@reach/router"

export const SiteContext = createContext()

export const useSite = () => {
  const context = useContext(SiteContext)
  if (context === undefined) {
    throw new Error("useSite must be used within a SiteProvider")
  }

  return context
}

const SiteProvider = ({ children, value }) => {
  const [lunr, setLunr] = useState(null)

  const { people, companies } = useStaticQuery(graphql`
    {
      people: allMdx(filter: { fileAbsolutePath: { regex: "//people//" } }, sort: {fields: headings___value, order: ASC}) {
        edges {
          node {
            id
            fileAbsolutePath
            body
            rawBody
          }
        }
      }
      companies: allMdx(
        filter: { fileAbsolutePath: { regex: "//companies//" } }, sort: {fields: headings___value, order: ASC}
      ) {
        edges {
          node {
            id
            fileAbsolutePath
            body
            rawBody
          }
        }
      }
    }
  `)

  const AllData = { people: people.edges, companies: companies.edges }

  // const AllFilters = Object.keys(AllData).map((n) => {
  //   return AllData[n].map((f) => {

  //   })
  // })

  // console.log(AllFilters);

  const [results, setResults] = useState(AllData)
  const [filters, setFilters] = useState(null)
  const [query, setQuery] = useState("")

  //LUNR becomes available only via the window.
  //To make it easier for our app to access it we just set it in our app context.
  useLayoutEffect(() => {
    if (window.__LUNR__) {
      window.__LUNR__.__loaded.then(lunr => {
        console.log(lunr)
        //lunr.tokenizer.separator = /[\r\n|\n|\r]/
        setLunr(lunr)})
    }
  }, [])

  return (
    <SiteContext.Provider
      value={{
        lunr,
        results,
        setResults,
        filters,
        setFilters,
        query,
        setQuery,
        AllData,
      }}
    >
      {children}
    </SiteContext.Provider>
  )
}

export default SiteContext
export { SiteProvider }
