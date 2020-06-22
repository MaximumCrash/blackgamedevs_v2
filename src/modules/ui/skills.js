//** @jsx jsx */
import React from "react"
import { Flex, jsx } from "theme-ui"

import Button from "@ui/Button"
import { useSite } from "@layouts/SiteContext"

const Skills = ({ children }) => {
  const { filters, setFilters } = useSite()
  const _Children = React.Children.toArray(children)

  const setFilter = filter => {
    if (!filters.includes(filter)) {
      setFilters([...filters, filter])
    }
  }

  return (
    <Flex
      className="skills"
      sx={{
        flexWrap: "wrap",
        mt: "1rem",
        alignItems: "center",
        justifyContent: "flex-start",
      }}
    >
      {_Children.map(child => {
        return (
          <Button onClick={() => setFilter(child.props.children)}>
            {child}
          </Button>
        )
      })}
    </Flex>
  )
}

export default Skills
