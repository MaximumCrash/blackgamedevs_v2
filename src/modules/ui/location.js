//** @jsx jsx */
import React from "react"
import { jsx } from "theme-ui"

import { useSite } from "@layouts/SiteContext"
import Button from "@ui/Button"

const Location = ({ children }) => {
  const { setFilter, filterSet } = useSite()
  const filter = filterSet.locations.find((n) => n.label === children.props.children);

  return (
    <Button
      className="location"
      onClick={() => setFilter(filter)}
      sx={{
        "& > *": { m: 0, display: "inline-block", color: "text_secondary" },
        "::before": {
          content: '""',
          position: "relative",
          background: `url(./icon-location.svg)`,
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
