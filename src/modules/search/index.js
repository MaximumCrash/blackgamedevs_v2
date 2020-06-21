//** @jsx jsx */
import React, { useState } from "react"
import { Input, Box, Text, Flex, jsx } from "theme-ui"
import SmoothCollapse from "react-smooth-collapse"
import Sticky from "react-sticky-el"
import { navigate } from "@reach/router"

import searchIcon from "@public/icons/search_icon.svg"
import minusIcon from "@public/icons/minus_icon.svg"
import { useSite } from "@layouts/SiteContext"
import { groupBy } from "@src/utils"
import { motion, AnimatePresence } from "framer-motion"

const Search = () => {
  const {
    lunr,
    setResults,
    AllData,
    filters,
    setFilters,
    filterSet,
    query,
    setQuery,
  } = useSite()

  const [filtersOpen, setFiltersOpen] = useState(false)

  const onSubmit = e => {
    e.preventDefault()
    navigate(`/search?q=${query}`)
  }

  const onChange = ({ target: { value } }) => {
    if (lunr && value !== "") {
      const queryString =
        filters !== "" && filters !== null
          ? `${filters} ${value}*`
          : `${value}*`
      const refs = lunr["en"].index.search(queryString.replace(/\s/g, "*"))
      const results = groupBy(
        refs.map(({ ref }) => {
          const { id, name, type } = lunr["en"].store[ref]
          const { node } = AllData[type].find(({ node }) => node.id === id)

          return {
            type,
            node: { ...node, name },
          }
        }),
        "type"
      )

      setResults(results)
    }

    if (value === "") {
      const refs = lunr["en"].index.search(`${filters}`)
      const results = groupBy(
        refs.map(({ ref }) => {
          const { id, name, type } = lunr["en"].store[ref]
          const { node } = AllData[type].find(({ node }) => node.id === id)

          return {
            type,
            node: { ...node, name },
          }
        }),
        "type"
      )
      setResults(results.length ? results : AllData)
    }

    setQuery(value)
  }

  const setFilter = filter => {
    const updatedFilters =
      filters !== null && filters !== ""
        ? `${filters} +${filter}`
        : `+${filter}`
    const queryString =
      updatedFilters !== "" ? `${updatedFilters} ${query}*` : `${query}*`
    if (lunr) {
      const refs = lunr["en"].index.search(queryString.replace(/\s/g, "\\"))
      const results = groupBy(
        refs.map(({ ref }) => {
          const { id, name, type } = lunr["en"].store[ref]
          const { node } = AllData[type].find(({ node }) => node.id === id)

          return {
            type,
            node: { ...node, name },
          }
        }),
        "type"
      )

      setResults(results)
    }

    setFilters(updatedFilters)
  }

  const removeFilter = filter => {
    const updatedFilters = filters.replace(`+${filter}`, "")

    if (lunr) {
      const refs = lunr["en"].index.search(
        updatedFilters !== "" ? `${updatedFilters} ${query}*` : `${query}*`
      )
      const results = groupBy(
        refs.map(({ ref }) => {
          const { id, name, type } = lunr["en"].store[ref]
          const { node } = AllData[type].find(({ node }) => node.id === id)

          return {
            type,
            node: { ...node, name },
          }
        }),
        "type"
      )

      setResults(results)
    }

    setFilters(updatedFilters)
  }

  const clearFilters = () => {
    if (lunr) {
      const refs = lunr["en"].index.search(`${query}*`)
      const results = groupBy(
        refs.map(({ ref }) => {
          const { id, name, type } = lunr["en"].store[ref]
          const { node } = AllData[type].find(({ node }) => node.id === id)

          return {
            type,
            node: { ...node, name },
          }
        }),
        "type"
      )

      setResults(results.length ? results : AllData)
    }

    setFilters(null)
  }

  return (
    <Sticky
      dontUpdateHolderHeightWhenSticky={true}
      hideOnBoundaryHit={false}
      sx={{ position: "relative", zIndex: "10" }}
      stickyStyle={{
        boxShadow:
          "rgba(0, 0, 0, 0.32) 0px 8px 15px -9px, rgba(0, 0, 0, 0.64) 0px 8px 7px -9px",
      }}
    >
      <Box
        sx={{
          p: "1rem",
          pb: 2,
          borderBottom: "1px dotted",
          borderColor: "border",
          bg: "background",
        }}
      >
        <Box
          as="form"
          method="GET"
          role="search"
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
        <Text
          as="h2"
          sx={{
            color: "primary",
            cursor: "pointer",
            position: "relative",
            display: "inline-block",
            fontWeight: "normal",
          }}
          onClick={() => setFiltersOpen(!filtersOpen)}
        >
          Filters
          <Box
            sx={{
              opacity: "0.64",
              width: "20px",
              position: "relative",
              display: "inline-block",
              ml: ".3rem",
              top: "7px",
            }}
          >
            <img
              src={minusIcon}
              alt="expand icon"
              sx={{ position: "relative", top: "-6px" }}
            />
            <img
              src={minusIcon}
              className={filtersOpen ? "hide" : ""}
              alt="expand icon"
              sx={{
                transform: `rotate(90deg)`,
                position: "absolute",
                top: 0,
                right: 0,
                transition: "all .1s ease",
                "&.hide": { transform: "rotate(180deg)" },
              }}
            />
          </Box>
        </Text>
        {filters && filters.length > 0 && (
          <Text
            sx={{
              color: "text_secondary",
              fontSize: "15px",
              display: "inline-block",
              ml: "1rem",
              textDecoration: "underline",
              cursor: "pointer",
            }}
            onClick={clearFilters}
          >
            Remove filters
          </Text>
        )}
        <SmoothCollapse
          eagerRender={true}
          allowOverflowWhenOpen={true}
          expanded={filters && filters.length}
          sx={{ pl: "1rem", pr: "1rem" }}
        >
          Current Filters:{" "}
          {filters &&
            filters.split("+").map((filter, index) => (
              <React.Fragment key={`selected-filters-${index}-${filter}`}>
                {filter}
                {index !== filters.split("+").length - 1 ? "," : ""}
              </React.Fragment>
            ))}
        </SmoothCollapse>
        <SmoothCollapse
          eagerRender={true}
          allowOverflowWhenOpen={true}
          expanded={filtersOpen}
          sx={{ pl: "1rem", pr: "1rem", mt: ".24rem" }}
        >
          {filterSet.skills.length && (
            <>
              <Text sx={{ fontSize: "1.16rem", mb: ".64rem" }}>Skills:</Text>
              <Flex
                sx={{
                  flexDirection: "row",
                  flexWrap: "wrap",
                  alignItems: "flexStart",
                  mt: ".32rem",
                }}
              >
                {filterSet.skills.map(skill => {
                  return (
                    <motion.div
                      whileTap={{ scale: 0.8 }}
                      transition={{ ease: "easeInOut", duration: 0.1 }}
                      sx={{
                        fontSize: "1rem",
                        fontWeight: "normal",
                        borderRadius: "5px",
                        border: "1px solid",
                        mb: "1rem",
                        mr: ".5rem",
                        color:
                          filters && filters.includes(skill)
                            ? "link_hover"
                            : "text_secondary",
                        borderColor:
                          filters && filters.includes(skill)
                            ? "link_hover"
                            : "filterBorder",
                        padding: ".2rem .6rem",
                        cursor: "pointer",
                        transition: "all .1s ease",
                        ":hover": {
                          borderColor: "text",
                          color: "text",
                        },
                        "&:hover > *": {
                          color: "text",
                        },
                      }}
                      onClick={() => setFilter(skill)}
                    >
                      {skill}
                    </motion.div>
                  )
                })}
              </Flex>
            </>
          )}

          {filterSet.locations.length && (
            <>
              <Text sx={{ fontSize: "1.16rem", mb: ".64rem" }}>Locations:</Text>
              <Flex
                sx={{
                  flexDirection: "row",
                  flexWrap: "wrap",
                  alignItems: "flexStart",
                  mt: ".32rem",
                }}
              >
                {filterSet.locations.map(location => {
                  return (
                    <motion.div
                      whileTap={{ scale: 0.8 }}
                      transition={{ ease: "easeInOut", duration: 0.1 }}
                      sx={{
                        fontSize: "1rem",
                        fontWeight: "normal",
                        borderRadius: "5px",
                        border: "1px solid",
                        mb: "1rem",
                        mr: ".5rem",
                        color:
                          filters && filters.includes(location)
                            ? "link_hover"
                            : "text_secondary",
                        borderColor:
                          filters && filters.includes(location)
                            ? "link_hover"
                            : "filterBorder",
                        padding: ".2rem .6rem",
                        cursor: "pointer",
                        transition: "all .1s ease",
                        ":hover": {
                          borderColor: "text",
                          color: "text",
                        },
                        "&:hover > *": {
                          color: "text",
                        },
                      }}
                      onClick={() => setFilter(location)}
                    >
                      {location}
                    </motion.div>
                  )
                })}
              </Flex>
            </>
          )}
        </SmoothCollapse>
      </Box>
    </Sticky>
  )
}

export default Search
