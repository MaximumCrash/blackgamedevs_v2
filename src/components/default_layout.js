import React from "react";
import SEO from "./seo.js";

import { MDXProvider } from "@mdx-js/react";
import { MDXRenderer } from "gatsby-plugin-mdx"
import { useStaticQuery, graphql } from "gatsby";

import shortcodes from './shortcodes.js';

export default (props) => {
  const { children, pageContext, uri } = props;

  return (
    <MDXProvider components={shortcodes}>
      <article>{children}</article>
    </MDXProvider>
  );
};
