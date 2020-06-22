//** @jsx jsx */
import React from "react"
import { jsx } from "theme-ui"

import Sticky from "react-sticky-el"
import SearchInput from "@search/SearchInput"
import Filters from "@search/Filters"

const Search = () => (
  <Sticky
    dontUpdateHolderHeightWhenSticky={true}
    hideOnBoundaryHit={false}
    sx={{
      position: "relative",
      zIndex: "10",
      p: 3,
      pb: 2,
      borderBottom: "1px dotted",
      borderColor: "border",
    }}
    stickyStyle={{
      boxShadow:
        "rgba(0, 0, 0, 0.32) 0px 8px 15px -9px, rgba(0, 0, 0, 0.64) 0px 8px 7px -9px",
    }}
  >
    <SearchInput />
    <Filters />
  </Sticky>
)

export default Search
