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
import { flattenSkills, sanitizeFilter } from "@utils"

export const SiteContext = createContext()

export const useSite = () => {
  const context = useContext(SiteContext)
  if (context === undefined) {
    throw new Error("useSite must be used within a SiteProvider")
  }

  return context
}

const SiteProvider = ({ children, value }) => {

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
  const AllFilters = directory.edges.map(({ node: { rawBody } }) => {
    const skills = sanitizeFilter(rawBody, "Skills")
    //Filter out empty strings, trim whitespace, convert to camelCase for key consistency

    const locations = sanitizeFilter(rawBody, "Location") //Filter out empty strings, trim whitespace, convert to camelCase for key consistency

    return { skills, locations }
  })

  //Seperate filters based on whether they are skills or locations.
  //Flatten them into 1 array.
  const skills = flattenSkills(AllFilters, "skills")
  const locations = flattenSkills(AllFilters, "locations")

  const filterSet = { skills, locations }

  const [filters, setFilters] = useState([])
  const filterKeys = filters.map(({ key }) => key)

  const [query, setQuery] = useState("")

  const setFilter = (filter, toggle) => {
    console.log(filter);
    const indexOfFilter = filterKeys.indexOf(filter.key)
    if (toggle) {
      
      if (indexOfFilter !== -1) {
        const _filters = [...filters]
        _filters.splice(indexOfFilter, 1)
        setFilters(_filters)
      } else {
        console.log(filter);
        setFilters([...filters, filter])
      }
    }
    else {
      if (indexOfFilter === -1) {
        console.log(filter);
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
  
  console.log(filterSet)
  return (
    <SiteContext.Provider
      value={{
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
