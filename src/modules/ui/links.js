//** @jsx jsx */
import React from "react"
import { Box, Flex, jsx } from "theme-ui"

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
          height: "1.46rem",
          mr: ".64rem",
          verticalAlign: "middle",
        }}
      />
      {_Children.map(game => {
        let element = game

        if (game.props.mdxType === "ul" || game.props.mdxType === "ol") {
          element = game.props.children.props.children
        }

        return <Box sx={{ mr: ".65rem", "& > *": { m: 0 } }}>{element}</Box>
      })}
    </Flex>
  )
}

export default Links
