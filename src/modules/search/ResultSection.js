//** @jsx jsx */
import React from "react"
import { MDXProvider } from "@mdx-js/react"
import { motion, AnimatePresence } from "framer-motion"
import { jsx, Text, Box, Flex } from "theme-ui"

import Shortcodes from "@ui/shortcodes"
import { sortNodesBy } from "@utils"
import Result from "@search/Result"
import Link from "@modules/utility/Link"

const ResultSection = ({ results, sortBy = "name", children, query, noun }) => (
    <Box>
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
          <AnimatePresence exitBeforeEnter >
            {sortNodesBy(results, sortBy).map(({ id, ...otherProps }, index) => (
              <motion.li
                sx={{ m: "2rem 0 0 2rem", width: "30%", maxWidth: "405px" }}
                initial={{ opacity: 0, y: 32 }}
                transition={{ ease: "easeInOut", duration: 0.164 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                exit={{ opacity: 0, y: 32 }}
              >
              <Result key={`result-obj-${id}-${index}`} {...otherProps} />
              </motion.li>
            ))}
            
          </AnimatePresence>
          {(results && results.length === 0) && (
              <Flex key={'no-results'} sx={{ flexDirection: "column", p: "2rem", pb: 0 }}>
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
        </MDXProvider>
      </Flex>
    </Box>
  )

export default ResultSection
