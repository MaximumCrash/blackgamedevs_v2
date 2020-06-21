//** @jsx jsx */
import React from 'react';
import {Box, jsx} from 'theme-ui';

import {useSite} from '@layouts/SiteContext';
import {groupBy} from '@src/utils'

const Location = ({children}) => {
		const {query, setQuery, filters, setFilters, setResults, lunr, AllData} = useSite();
		const _Children = React.Children.toArray(children);
		const filterKey = _Children[0].props.children;

		const setFilter = (filter) => {
		if (filters && filters.includes(filter)) {return;}

		const updatedFilters =  filters !== null && filters !== '' ? `${filters} +${filter}` : `+${filter}`;

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
	
	return(<Box className="location" onClick={() => setFilter(filterKey)} sx={{
		fontSize: "1rem",
		fontWeight: "normal",
		borderRadius: "5px",
		border: "1px solid",
		mb: "1rem",
		borderColor: "filterBorder",
		padding: ".2rem .6rem",
		cursor: 'pointer',
		':hover': {
						borderColor: 'text',
						color: 'text',
						
					},
					'&:hover > *': {
							color: 'text'
						},
		'& > *': {m: 0, display: 'inline-block', color: 'text2'},
		"::before": {
			content: '""',
			position: "relative",
			background: `url(./icons/icon-location.svg)`,
			backgroundRepeat: "no-repeat",
			height: "19px",
			width: "12px",
			filter: "invert(80%)",
			display: "inline-block",
			verticalAlign: "middle",
			mr: ".5rem",
		},
	}}>
	{children}
	</Box>
	)
}

export default Location; 
