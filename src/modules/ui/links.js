//** @jsx jsx */
import React from "react"
import { Box, Flex, jsx } from "theme-ui"
import Link from "@modules/utility/Link"
const Links = ({ children, icon, className, alt }) => {
  const _Children = React.Children.toArray(children)

  return (
    <Flex
      className={className}
      sx={{
        alignItems: "flex-start",
        width: "100%",
        mb: ".64rem",
        flexWrap: "wrap",
        "& a": { color: "link_secondary" },
      }}
    >
      <img
        src={icon}
        alt={alt}
        sx={{
          filter: "invert(80%)",
          height: "1.2rem",
          mr: ".64rem",
          verticalAlign: "middle",
        }}
      />
      {_Children.map((link, index) => {
        let element = link

        if (link.props.mdxType === "ul" || link.props.mdxType === "ol") {
          element = link.props.children.props.children
        }

        return (
          <Box
            key={`links-link-${index}-${element}`}
            sx={{ mr: ".65rem", "& > *": { m: 0 }, fontSize: "15px" }}
          >
            {element}
          </Box>
        )
      })}
    </Flex>
  )
}

export default Links
