//** @jsx jsx */
import React, {useState} from 'react';
import {Input, Box, Text,  jsx} from 'theme-ui';
import SmoothCollapse from 'react-smooth-collapse';

import searchIcon from '@public/icons/search_icon.svg';
import minusIcon from '@public/icons/minus_icon.svg';
import {useSite} from '@layouts/SiteContext';

const Search = () => {
	const {lunr, query, setQuery} = useSite();
	const [filtersOpen, setFiltersOpen] = useState(false);

	const onChange = ({target: {value}}) => {
		setQuery(value);
	}

	return (
		<Box sx={{mb:3}}>
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
			"-webkit-appearance": "none"
		  }
        }}/>
			</Box>
			<Text as="h2" sx={{pl: '1rem', pr: '1rem', color: 'primary',  cursor: 'pointer', position: 'relative', display: 'inline-block'}} onClick={() => setFiltersOpen(!filtersOpen)}>
				Filters 
				<Box sx={{opacity: '0.64', width: '20px', position: 'absolute', right: '-11px', top: '3px'}}>
					<img src={minusIcon} alt="expand icon" sx={{position: 'relative', top: '-6px'}}/>
					<img src={minusIcon} className={filtersOpen ? 'hide' : ''} alt="expand icon" sx={{transform: `rotate(90deg)`, position: 'absolute', top:0, right:0, transition: 'all .164s ease-in-out', '&.hide': {transform: 'rotate(180deg)'}}}/>
				</Box>
			</Text>
			<SmoothCollapse eagerRender={true} allowOverflowWhenOpen={true} expanded={!filtersOpen} sx={{pl: '1rem', pr: '1rem'}}>
				Selected Filters Go Here
			</SmoothCollapse>
			<SmoothCollapse eagerRender={true} allowOverflowWhenOpen={true} expanded={filtersOpen} sx={{pl: '1rem', pr: '1rem'}}>
				Filters Go Here
			</SmoothCollapse>
		</Box>
	)
}
 
 export default Search;
