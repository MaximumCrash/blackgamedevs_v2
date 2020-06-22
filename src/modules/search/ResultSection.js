//** @jsx jsx */
import React from "react"
import { MDXProvider } from "@mdx-js/react"
import { AnimatePresence } from "framer-motion"
import { jsx, Text, Flex } from "theme-ui"

import Shortcodes from "@ui/shortcodes"
import { sortNodesBy } from "@utils"
import Result from "@search/Result"
import Link from "@modules/utility/Link"

const ResultSection = ({ results, sortBy = "name", children, query, noun }) => {
  return (
    <>
      <Text
        as="h2"
        sx={{ color: "primary", fontWeight: "normal", mb: 3, mt: 3 }}
      >
        {children}
        <span
          sx={{ fontSize: "1rem", color: "text_secondary" }}
        >{` (${results.length})`}</span>
      </Text>
      <Flex
        as="ul"
        key="people"
        sx={{
          listStyleType: "none",
          p: 0,
          display: "inline-flex",
          flexWrap: "wrap",
          m: "-2rem 0 0 -2rem",
          width: "calc(100% + 2rem)",
        }}
      >
        <MDXProvider components={Shortcodes}>
          <AnimatePresence exitBeforeEnter initial={false}>
            {sortNodesBy(results, sortBy).map(({ node }, index) => (
              <Result key={node.id} {...node} />
            ))}
            {results.length === 0 && (
              <Flex sx={{ flexDirection: "column", p: "2rem", pb: 0 }}>
                {query && <Text>{`No results for ${query}`}</Text>}
                <Text>
                  {`Think ${noun} is missing? Add them to the list `}
                  <Link
                    to="https://github.com/QuantumBox/blackgamedevs"
                    sx={{ cursor: "pointer" }}
                  >
                    here.
                  </Link>
                </Text>
              </Flex>
            )}
          </AnimatePresence>
        </MDXProvider>
      </Flex>
    </>
  )
}

export default ResultSection
