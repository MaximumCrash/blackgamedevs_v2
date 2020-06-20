//** @jsx jsx */
import React from 'react';
import { MDXProvider } from "@mdx-js/react";
import { MDXRenderer } from "gatsby-plugin-mdx"
import {Text, Flex, Box, jsx} from 'theme-ui'

import {useSite} from '@layouts/SiteContext';
import Shortcodes from '@components/shortcodes'
import Search from '@components/search'
import iconLocation from '@public/icons/icon-location.svg'

const Index = () => {
	const {results: {people, companies}} = useSite();

return (
	<>
		<Search/>
		<Text as="h2" sx={{color: 'primary', fontWeight: 'normal', mb: 3}}>People</Text>
		{people && <Flex as='ul' sx={{listStyleType: 'none', p:0,  display: 'inline-flex', flexWrap: 'wrap', m: '-2rem 0 0 -2rem', width: 'calc(100% + 2rem)'}}>
			<MDXProvider components={Shortcodes}>
				
					{people.map(({node}) => 
						<Flex as='li' sx={{m: '2rem 0 0 2rem', width: '30%', maxWidth: '405px', flexDirection: 'column', alignItems: 'flex-start', '& > .title': {fontSize: '1.17em', margin: '0 0 .5rem', order: 0, color: 'primary'}, '& > .subtitle': {order: 1, fontSize: '1rem', fontWeight: 'normal', borderRadius: '5px', border: '1px solid', mb: '1rem', borderColor: 'filterBorder', padding: '.2rem .6rem', '::before': { content: '""', background: `url(./icons/icon-location.svg)`, backgroundRepeat: 'no-repeat', height: '19px', width: '12px', filter: 'invert(80%)', display: 'inline-block', verticalAlign: 'middle', mr: '.5rem'}}, '& > img': {order: 2, width: '100%', maxWidth: '405px'}, '& > .skills': {order: 3}, '& > .personal-sites': {order: 4}, '& > .business-sites': {order: 5}, '& > .games': {order: 6}}}>
							<MDXRenderer>
								{node.body}
							</MDXRenderer>
						</Flex>)
					}
			</MDXProvider>
		</Flex>}
		{/* <Text as="h2">Companies</Text>
		{companies && <Flex>
			<MDXProvider components={Shortcodes}>
				<MDXRenderer>
					{companies.map(({node}) => node.body)}
				</MDXRenderer>
			</MDXProvider>
		</>} */}
	</>
)

}

export default Index; 
