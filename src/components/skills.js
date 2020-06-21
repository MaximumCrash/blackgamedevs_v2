//** @jsx jsx */
import React from 'react';
import {Box, Flex, jsx} from 'theme-ui';

import {useSite} from '@layouts/SiteContext';
import {groupBy} from '@src/utils'

const Skills = ({children}) => {
	const {query, setQuery, filters, setFilters, setResults, lunr, AllData} = useSite();
	const _Children = React.Children.toArray(children);

		const setFilter = (filter) => {
		if (filters && filters.includes(filter)) {return;}

		const updatedFilters =  `${filters} +${filter}`;

		if (lunr) {
			const refs = lunr["en"].index.search(`${updatedFilters} ${query}*`);
			const results = groupBy(refs.map(({ref}) => {
				const {id, type} = lunr["en"].store[ref];
				const {node} = AllData[type].find(({node}) => node.id === id);
				
				return {
					type, 
					node
				}
			}), 'type')

			setResults(results);
		}	

		setFilters(updatedFilters);
	}


	return (
		<Flex className="skills" sx={{flexWrap: 'wrap', mt: '1rem', alignItems: 'center', justifyContent: 'flex-start'}}>
			{_Children.map((child) => {
				return (
					<Box sx={{cursor: 'pointer', fontSize: "1rem",
                    fontWeight: "normal",
                    borderRadius: "5px",
                    border: "1px solid",
                    mb: "1rem",
					mr: "1rem",
                    borderColor: "filterBorder",
                    padding: ".2rem .6rem",
					transition: 'all .164s ease-in-out',
					color: 'text2',
					fontSize: '15px',
					':hover': {
						borderColor: 'text',
						color: 'text',
						
					},
					'&:hover > *': {
							color: 'text'
						},
					'& > *': {m: 0, color: 'text2'}}} onClick={() => setFilter(child.props.children)}>
					{child}
				</Box>
				)
			})}
		</Flex>
	)
}

export default Skills
