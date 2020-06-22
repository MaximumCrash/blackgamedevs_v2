//** @jsx jsx */
import React from "react"
import { Flex, jsx } from "theme-ui"

import { MDXRenderer } from "gatsby-plugin-mdx"
import { motion } from "framer-motion"

import noUserImage from "@public/no-user-image.png"
import noCompanyImage from "@public/no-company-image.png"

const Result = ({ children, frontmatter, rawBody, body }) => {
  const hasImage = rawBody.includes("![")

  return (
    <motion.li
      sx={{ m: "2rem 0 0 2rem", width: "30%", maxWidth: "405px" }}
      initial={{ opacity: 0, y: 32 }}
      transition={{ ease: "easeInOut", duration: 0.164 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      exit={{ opacity: 0, y: 32 }}
    >
      <Flex
        sx={{
          flexDirection: "column",
          alignItems: "flex-start",
          "& > .title": {
            fontSize: "1.25em",
            margin: "0 0 .5rem",
            order: 0,
            color: "primary",
          },
          "& > .location": {
            order: 1,
          },
          "& > img": {
            order: 2,
            width: "100%",
            maxWidth: "405px",
            height: "300px",
            objectFit: "cover",
            borderRadius: "5px",
          },
          "& > .skills": { order: 3 },
          "& > .personal": { order: 4 },
          "& > .business": { order: 5 },
          "& > .games": { order: 6 },
        }}
      >
        {!hasImage && (
          <img
            alt={
              frontmatter.isCompany ? "No Company Image" : "No Game Dev Image"
            }
            src={frontmatter.isCompany ? noCompanyImage : noUserImage}
          />
        )}
        <MDXRenderer>{body}</MDXRenderer>
      </Flex>
    </motion.li>
  )
}

export default Result
