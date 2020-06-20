//** @jsx jsx */
import React, {useState} from 'react';
import {Input, Box, Text,  jsx} from 'theme-ui';
import SmoothCollapse from 'react-smooth-collapse';

import searchIcon from '@public/icons/search_icon.svg';
import minusIcon from '@public/icons/minus_icon.svg';
import {useSite} from '@layouts/SiteContext';
import {groupBy} from '@src/utils'

const Search = () => {
	const {lunr, setResults, AllData} = useSite();
	const [query, setQuery] = useState('');
	const [filters, setFilters] = useState(null);
	const [filtersOpen, setFiltersOpen] = useState(false);

	const onChange = ({target: {value}}) => {
		if (lunr && value !== "") {
			const refs = lunr["en"].index.search(`${filters} ${value}*`);
			const results = groupBy(refs.map(({ref}) => {
				const {id, type} = lunr["en"].store[ref];
				const {node} = AllData[type].find(({node}) => node.id === id);
				
				return {
					type, 
					node
				}
			}), 'type');

			setResults(results);
		}	

		if (value === "") {
			const refs = lunr["en"].index.search(`${filters}`);
			const results = groupBy(refs.map(({ref}) => {
				const {id, type} = lunr["en"].store[ref];
				const data = AllData[type].find(({node}) => node.id === id)
				
				return {
					type, 
					data
				}
			}), 'type');
			setResults(AllData)
		}

		setQuery(value);
	}

	const setFilter = (filter) => {
		const updatedFilters = `${filters} +${filter}`;

		if (lunr) {
			const refs = lunr["en"].index.search(`${updatedFilters} ${query}*`);
			const results = groupBy(refs.map(({ref}) => {
				const {id, type} = lunr["en"].store[ref];
				const {node} = AllData[type].find(({node}) => node.id === id);
				
				return {
					type, 
					node
				}
			}), 'type');

			setResults(results);
		}	

		setFilters(updatedFilters);
	}

	const removeFilter = (filter) => {
		const updatedFilters = filters.replace(`+${filter}`, '');

		if (lunr) {
			const refs = lunr["en"].index.search(`${updatedFilters} ${query}*`);
			const results = groupBy(refs.map(({ref}) => {
				const {id, type} = lunr["en"].store[ref];
				const {node} = AllData[type].find(({node}) => node.id === id);
				
				return {
					type, 
					node
				}
			}), 'type');

			setResults(results);
		}	

		setFilters(updatedFilters);
	}

	return (
		<Box sx={{mb:3, pb: 2, borderBottom: '1px dotted', borderColor: 'border'}}>
			<Box as="form" method="GET" role="search" sx={{position: 'relative', mt: '1rem', mb: '0.5rem'}}>
				<img src={searchIcon} alt="Search Icon" sx={{position: 'absolute', left: '11px', top: '50%', transform: 'translateY(-50%)', width: '23px', opacity: '0.64'}}/>
				<Input name="keywords" id="search" type="search" value={query} aria-label="Search" placeholder={"Search..."} onChange={onChange} sx={{
          border: "none",
          borderRadius: "100000px",
          letterSpacing: "0.3px",
          "::placeholder": {
            color: "body",
          },
		  bg: 'border',
		  p: '14px',
		  pl: '46px',
		  pt: '15px',
		  fontSize: '1.1rem',
		  outline: 'none',
		  color: 'text',
		  lineHeight: '1.1rem',
		  '::-webkit-search-cancel-button': {
			"WebkitAppearance": "none"
		  }
        }}/>
			</Box>
			<Text as="h2" sx={{pl: '1rem', pr: '1rem', color: 'primary',  cursor: 'pointer', position: 'relative', display: 'inline-block', fontWeight: 'normal'}} onClick={() => setFiltersOpen(!filtersOpen)}>
				Filters 
				<Box sx={{opacity: '0.64', width: '20px', position: 'absolute', right: '-11px', top: '7px'}}>
					<img src={minusIcon} alt="expand icon" sx={{position: 'relative', top: '-6px'}}/>
					<img src={minusIcon} className={filtersOpen ? 'hide' : ''} alt="expand icon" sx={{transform: `rotate(90deg)`, position: 'absolute', top:0, right:0, transition: 'all .164s ease-in-out', '&.hide': {transform: 'rotate(180deg)'}}}/>
				</Box>
			</Text>
			<SmoothCollapse eagerRender={true} allowOverflowWhenOpen={true} expanded={!filtersOpen} sx={{pl: '1rem', pr: '1rem'}}>
				{filters && filters.split("+").map((filter, index) => (
					<Box key={`selected-filters-${index}`}>
						{filter} <span>X</span>
					</Box>
				))}
			</SmoothCollapse>
			<SmoothCollapse eagerRender={true} allowOverflowWhenOpen={true} expanded={filtersOpen} sx={{pl: '1rem', pr: '1rem'}}>
				Filters Go Here
			</SmoothCollapse>
		</Box>
	)
}
 
 export default Search;
