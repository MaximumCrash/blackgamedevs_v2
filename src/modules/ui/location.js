//** @jsx jsx */
import React from "react"
import { jsx } from "theme-ui"

import { useSite } from "@layouts/SiteContext"
import Button from "@ui/Button"

const Location = ({ children }) => {
  const { setFilter } = useSite()
  const _Children = React.Children.toArray(children)
  const filterKey = _Children[0].props.children

  return (
    <Button
      className="location"
      onClick={() => setFilter(filterKey)}
      sx={{
        "& > *": { m: 0, display: "inline-block", color: "text_secondary" },
        "::before": {
          content: '""',
          position: "relative",
          background: `url(./icons/icon-location.svg)`,
          backgroundRepeat: "no-repeat",
          height: "19px",
          width: "12px",
          filter: "invert(80%)",
          display: "inline-block",
          verticalAlign: "middle",
          mr: ".5rem",
        },
      }}
    >
      {children}
    </Button>
  )
}

export default Location
