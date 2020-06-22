// This file is the site's global state that's provided through
// React's Context API.
// You'll most likely see the use of useSite to access context.
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

  //Get all the results data (directory)
  const { directory } = useStaticQuery(graphql`
    {
      directory: allMdx(
        filter: { fileAbsolutePath: { regex: "//directory//" } }
        sort: { fields: headings___value, order: ASC }
      ) {
        edges {
          node {
            id
            fileAbsolutePath
            body
            rawBody
            frontmatter {
              isCompany
            }
          }
        }
      }
    }
  `)

  //Trransform that data into something consumable (People, Companies)
  const AllData = {
    people: directory.edges.filter(({ node }) => !node.frontmatter.isCompany),
    companies: directory.edges.filter(({ node }) => node.frontmatter.isCompany),
  }

  //Get all existing and unique Filters by taking copy between
  const AllFilters = directory.edges.map(({ node }) => {
    const skills = node.rawBody
      .substring(
        node.rawBody.lastIndexOf("<Skills>") + 9,
        node.rawBody.lastIndexOf("</Skills>")
      )
      .replace(/[-.#`!*()]["]|[0-9]\./g, "") //Replace MD usual characters with empty
      .split("\n") //Split by new lines
      .filter(n => n !== "")
      .map(n => n.trim()) //Filter out empty strings, and trim whitespace

    const locations = node.rawBody
      .substring(
        node.rawBody.lastIndexOf("<Location>") + 11,
        node.rawBody.lastIndexOf("</Location>")
      )
      .replace(/[-.#`!*()]["]|[0-9]\./g, "") //Replace MD usual characters with empty
      .split("\n") //Split by new lines
      .filter(n => n !== "")
      .map(n => n.trim()) //Filter out empty strings, and trim whitespace

    return { skills, locations }
  })

  //TODO(REJON): See if FLAT is needed here.
  //Seperate filters based on whether they are skills or locations.
  const skills = [...new Set(AllFilters.map(({ skills }) => skills).flat(1))]
  const locations = [
    ...new Set(AllFilters.map(({ locations }) => locations).flat(1)),
  ]

  const filterSet = { skills, locations }

  const [filters, setFilters] = useState([])
  const filterKeys = filters.map(({ key }) => key)

  const [query, setQuery] = useState("")

  //TODO(Rejon): Reimplement LUNR
  //LUNR becomes available only via the window.
  //To make it easier for our app to access it we just set it in our app context.
  useLayoutEffect(() => {
    if (window.__LUNR__) {
      window.__LUNR__.__loaded.then(lunr => {
        console.log(lunr)
        //lunr.tokenizer.separator = /[\r\n|\n|\r]/
        setLunr(lunr)
      })
    }
  }, [])

  const setFilter = (filter, toggle) => {
    if (toggle) {
      const indexOfFilter = filterKeys.indexOf(filter.key)
      if (indexOfFilter !== -1) {
        const _filters = [...filters]
        _filters.splice(indexOfFilter, 1)
        setFilters(_filters)
      } else {
        setFilters([...filters, filter])
      }
    }
  }

  const clearFilters = set => {
    if (set) {
      setFilters([...filters].filter(n => n.set !== set))
    } else {
      setFilters([])
    }
  }

  return (
    <SiteContext.Provider
      value={{
        lunr,
        filters,
        setFilter,
        clearFilters,
        filterSet,
        filterKeys,
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
