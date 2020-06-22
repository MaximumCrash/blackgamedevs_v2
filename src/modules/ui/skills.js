//** @jsx jsx */
import React from "react"
import { Flex, jsx } from "theme-ui"

import Button from "@ui/Button"
import { useSite } from "@layouts/SiteContext"

const Skills = ({ children }) => {
  const { filters, setFilter, filterSet } = useSite()
  const _Children = React.Children.toArray(children)

  const onClick = (f) => {
    const filter = filterSet.skills.find((n) => n.label === f.trim());
    console.log(filter, f);
    setFilter(filter);
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
      {_Children.map((child, index) => {
      
        return (
          <Button key={`skill-child-${index}-${child}`} onClick={() => onClick(child.props.children)}>
            {child}
          </Button>
        )
      })}
    </Flex>
  )
}

export default Skills
