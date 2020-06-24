//** @jsx jsx */
import React from "react"
import { MDXProvider } from "@mdx-js/react"
import { motion, AnimatePresence } from "framer-motion"
import { jsx, Text, Box, Flex, Grid } from "theme-ui"

import Shortcodes from "@ui/shortcodes"
import { sortNodesBy } from "@utils"
import Result from "@search/Result"
import Link from "@modules/utility/Link"

//Renders a section of our results sorted by "name" (default).
//Animations are handled by Framer Motion with motion elements and Animate Presence.
const ResultSection = ({ results, sortBy = "name", children, query, noun, jumpToSection }) => (
  <Box id={children}>
    <Text as="h2" sx={{ color: "primary", fontWeight: "normal", mb: 3, mt: 3 }}>
      {children}
      <span
        sx={{ fontSize: "1rem", color: "text_secondary" }}
      >{` (${results.length})`}</span>

        <Text className="jump-section-element" sx={{color: "text_secondary",
              fontSize: "15px",
              display: "inline-block",
              ml: "1rem",
              textDecoration: "underline",
              cursor: "pointer",}} onClick={() => window.scrollTo({top: document.getElementById(jumpToSection).offsetTop, behavior: 'smooth'})}> Jump to next section </Text>

      
    </Text>
    <Grid
      as="ul"
      key="people"
      columns={['1fr','1fr 1fr', '1fr 1fr 1fr']}
      gap={['1rem', '2rem']}
      sx={{
        listStyleType: "none",
        p: 0,
        width: "calc(100%)",
      }}
    >
      <MDXProvider components={Shortcodes}>
        <AnimatePresence exitBeforeEnter>
          {sortNodesBy(results, sortBy).map(({ id, ...otherProps }, index) => (
            <motion.li
              key={`result-obj-${id}-${index}`}
              initial={{ opacity: 0, y: 32 }}
              transition={{ ease: "easeInOut", duration: 0.164 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 32 }}
            >
              <Result {...otherProps} />
            </motion.li>
          ))}
        </AnimatePresence>
        {results && results.length === 0 && (
          <Flex
            key={"no-results"}
            sx={{ flexDirection: "column", p: "2rem", pb: 0 }}
          >
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
    </Grid>
  </Box>
)

export default ResultSection
