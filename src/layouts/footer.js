//** @jsx jsx */
import React from 'react';
import {useStaticQuery, graphql} from 'gatsby'
import { MDXProvider } from "@mdx-js/react";
import { MDXRenderer } from "gatsby-plugin-mdx";
import {Box, jsx} from 'theme-ui'

import shortcodes from '@components/shortcodes'

const Footer = () => {
	const {allMdx: edges} = useStaticQuery(graphql`
		query GetFooter {
			allMdx(filter: {fileAbsolutePath: {regex: "/footer.mdx/"}}) {
				edges {
					node {
						body
					}
				}
			}
		}
	`)

	if (edges.edges[0] === undefined) {
		return (<></>)
	}

	return (
		<Box sx={{'& > *': {color: 'primary'}, fontFamily: 'heading', borderTop: '1px dotted', borderColor: 'border'}}> 
			<MDXProvider components={shortcodes}>
				<MDXRenderer>
					
						{edges.edges[0].node.body}
					
				</MDXRenderer>
			</MDXProvider>
		</Box>
	)
}

export default Footer; 
