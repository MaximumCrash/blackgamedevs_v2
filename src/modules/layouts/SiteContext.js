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
import { flattenSkills, sanitizeFilter, groupBy } from "@utils"

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

  //Transform that data into something consumable (People, Companies)
  //NOTE(Rejon): Used to securely match result ids to data for rendering when searching/filtering (see )
  const AllData = {
    people: directory.edges.filter(({ node }) => !node.frontmatter.isCompany),
    companies: directory.edges.filter(({ node }) => node.frontmatter.isCompany),
  }

  //Get all existing and unique Filters by taking copy between
  //NOTE(Rejon): Because filters are automagically generated we do the heavy lifting to sanitize text.
  //             We do this to get our filters into something consistent for comparisons, rendering, and querying via input.
  const AllFilters = directory.edges.map(({ node: { rawBody } }) => {
    //Filter out empty strings, trim whitespace, convert to camelCase for key consistency
    //NOTE(Rejon): The 2nd argument in this SHOULD match the component key ie. <Skills>
    const skills = rawBody.includes('<Skills>') ? sanitizeFilter(rawBody, "Skills") : [];
    const locations = rawBody.includes('<Location>') ? sanitizeFilter(rawBody, "Location") : [] //Filter out empty strings, trim whitespace, convert to camelCase for key consistency

    return { skills, locations }
  })

  //Seperate filters based on whether they are skills or locations.
  //Flatten them into 1 array. (Since we're managing individual node data like people and companies which share skills and locations)
  const skills = flattenSkills(AllFilters, "skills")
  const locations = flattenSkills(AllFilters, "locations")
  const filterSet = { skills, locations } //Helper to make it easier to run comparisons against existing filters in a specific set.

  const [filters, setFilters] = useState([]) //Filter State
  const [results, setResults] = useState([]) //Current search query

  //Method call that takes a filter object and whether we're toggling, or just activating.
  const setFilter = (filter, toggle) => {
    const indexOfFilter = filters.findIndex((f) => f.key === filter.key);

    if (toggle) {
      if (indexOfFilter !== -1) {
        //Remove array if it exists
        const _filters = [...filters]
        _filters.splice(indexOfFilter, 1)
        setFilters(_filters)
      } else {
        //Add filter if it doesn't exist.
        setFilters([...filters, filter])
      }
    } else {
      //Just activate/add a filter, no toggle.
      if (indexOfFilter === -1) {
        setFilters([...filters, filter])
      }
    }
  }

  //Method call that removes filters entirely, or by a specific set.
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
        filters,
        setFilter,
        clearFilters,
        filterSet,
        results, 
        setResults, 
        AllData,
      }}
    >
      {children}
    </SiteContext.Provider>
  )
}

export default SiteContext
export { SiteProvider }
