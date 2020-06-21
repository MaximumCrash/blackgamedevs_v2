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

  const AllFilters = Object.keys(AllData).map((n) => {
    return AllData[n].map(({node}) => {
      const skills = node.rawBody
                    .substring(
                      node.rawBody.lastIndexOf("<Skills>") + 9,
                      node.rawBody.lastIndexOf("</Skills>")
                    )
                    .split("\n")
                    .filter(n => n !== "")
      
      const locations = node.rawBody
                    .substring(
                     node.rawBody.lastIndexOf("<Location>") + 11,
                      node.rawBody.lastIndexOf("</Location>")
                    )
                    .split("\n")
                    .filter(n => n !== "")
        return ({skills, locations});
    })
  }).flat(1);

  const skills = [... new Set(AllFilters.map(({skills}) => skills).flat(1))];
  const locations = [... new Set(AllFilters.map(({locations}) => locations).flat(1))];
  const filterSet = {skills, locations};
  

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
        filterSet,
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
