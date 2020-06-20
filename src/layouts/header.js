//** @jsx jsx  */
import React from 'react';
import {useStaticQuery, graphql} from 'gatsby'
import { MDXProvider } from "@mdx-js/react";
import { MDXRenderer } from "gatsby-plugin-mdx"
import {Box, jsx} from 'theme-ui'

import shortcodes from '@components/shortcodes.js'

import _Header from './header.mdx'

const Header = () => {

	const {allMdx: edges} = useStaticQuery(graphql`
				query MyQuery {
		allMdx(filter: {fileAbsolutePath: {regex: "/header.mdx/"}}) {
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
	<Box sx={{'& > *': {color: 'primary'}, '& > h1': {fontSize: '3rem'}, fontFamily: 'heading', borderBottom: '1px dotted', borderColor: 'border'}}>
		<MDXProvider components={shortcodes}>
			<MDXRenderer>
			{edges.edges[0].node.body}
			</MDXRenderer>
		</MDXProvider>
	</Box>
	)
}

export default Header;
