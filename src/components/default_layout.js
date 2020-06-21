import React from "react"
import SEO from "./seo.js"

import { MDXProvider } from "@mdx-js/react"

import shortcodes from "./shortcodes.js"

export default props => {
  const { children } = props

  return (
    <MDXProvider components={shortcodes}>
      <article>{children}</article>
    </MDXProvider>
  )
}
