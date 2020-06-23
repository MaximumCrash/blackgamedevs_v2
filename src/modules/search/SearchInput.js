//** @jsx jsx */
import React from "react"
import { Box, Input, jsx } from "theme-ui"
import { navigate } from "@reach/router"

import searchIcon from "@public/search_icon.svg"
import { useSite } from "@layouts/SiteContext"

const SearchInput = () => {
  const { query, setQuery } = useSite()

  const onSubmit = e => {
    e.preventDefault()
    window.scrollTo({top: 0, behavior: 'smooth'});
  }

  const onChange = ({ target: { value } }) => {
    setQuery(value)
  }

  return (
    <Box
      sx={{
        mb: 1,
        bg: "background",
      }}
    >
      <Box
        as="form"
        method="GET"
        role="search"
        onSubmit={onSubmit}
        sx={{ position: "relative", mb: "0.5rem" }}
      >
        <img
          src={searchIcon}
          alt="Search Icon"
          sx={{
            position: "absolute",
            left: "15px",
            top: "50%",
            transform: "translateY(-50%)",
            width: "23px",
            opacity: "0.64",
            filter: "invert(80%)",
          }}
        />
        <Input
          name="keywords"
          id="search"
          type="search"
          value={query}
          aria-label="Search"
          placeholder={"Search..."}
          onChange={onChange}
          sx={{
            border: "none",
            borderRadius: "100000px",
            letterSpacing: "0.3px",
            "::placeholder": {
              color: "body",
            },
            bg: "border",
            p: "14px",
            pl: "46px",
            pt: "15px",
            fontSize: "1.1rem",
            outline: "none",
            color: "text",
            lineHeight: "1.1rem",
            "::-webkit-search-cancel-button": {
              WebkitAppearance: "none",
            },
          }}
        />
      </Box>
    </Box>
  )
}

export default SearchInput
