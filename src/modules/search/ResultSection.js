//** @jsx jsx */
import React from "react"
import { MDXProvider } from "@mdx-js/react"
import { jsx, Text, Box, Flex, Grid } from "theme-ui"
import {
  WindowScroller, 
  AutoSizer, 
  List
} from 'react-virtualized';

import Shortcodes from "@ui/shortcodes"
import { sortNodesBy } from "@utils"
import Result from "@search/Result"
import Link from "@modules/utility/Link"

//Renders a section of our results sorted by "name" (default).
//Animations are handled by Framer Motion with motion elements and Animate Presence.
const ResultSection = ({
  results,
  sortBy = "name",
  children,
  query,
  noun,
  jumpToSection,
}) => {
  const ITEMS_COUNT = results.length; 
  const ITEM_SIZE = 300;




  return (<Box id={children}>
    <Text as="h2" sx={{ color: "primary", fontWeight: "normal", mb: 3, mt: 3 }}>
      {children}
      <span
        sx={{ fontSize: "1rem", color: "text_secondary" }}
      >{` (${results.length})`}</span>

      <Text
        className="jump-section-element"
        sx={{
          color: "text_secondary",
          fontSize: "15px",
          display: "inline-block",
          ml: "1rem",
          textDecoration: "underline",
          cursor: "pointer",
        }}
        onClick={() =>
          window.scrollTo({
            top: document.getElementById(jumpToSection).offsetTop,
            behavior: "smooth",
          })
        }
      >
        {" "}
        Jump to next section{" "}
      </Text>
    </Text>
    <WindowScroller>
    {({height, scrollTop}) => (
      <AutoSizer disableHeight>
      {({width}) =>{
        const itemsPerRow =3;
        const rowCount = Math.ceil(ITEMS_COUNT/itemsPerRow);
       
        return  (
        <List className='List'
          width={width}
          autoHeight
          height={height}
          rowHeight={18}
          rowCount={rowCount}
          overscanRowCount={5}
          rowHeight={ITEM_SIZE}
          sscrollTop={scrollTop}
          rowRenderer={
            ({ index, key, style }) => {
              const items = [];
              const fromIndex = index * itemsPerRow;
              const toIndex = Math.min(fromIndex + itemsPerRow, ITEMS_COUNT);

              for (let i = fromIndex; i < toIndex; i++) {
                items.push(
                  <div
                    className='Item'
                    key={i}
                  >
                    Item {i}
                  </div>
                )
              }

              return (
                <div
                  className='Row'
                  key={key}
                  style={style}
                >
                  {items}
                </div>
              )
            }
          }
          />
      )
      }}
    </AutoSizer>
    )}
    </WindowScroller>
    {/* <Grid
      as="ul"
      key="people"
      columns={["1fr", "1fr 1fr", "1fr 1fr 1fr"]}
      gap={["1rem", "2rem"]}
      sx={{
        listStyleType: "none",
        p: 0,
        width: "calc(100%)",
      }}
    >
      <MDXProvider components={Shortcodes}>
        {results.map(({ id, ...otherProps }, index) => (
          <Result key={`result-obj-${id}-${index}`} {...otherProps} />
        ))}
      </MDXProvider>
    </Grid> */}
    {results && results.length === 0 && (
      <Flex key={"no-results"} sx={{ flexDirection: "column", px: "1rem" }}>
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
  </Box>
)
}

export default ResultSection
