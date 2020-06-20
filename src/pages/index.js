import React from 'react';
import {useSite} from '@layouts/SiteContext';

import Search from '@components/search'

const Index = () => {
	const {lunr, query, setQuery} = useSite();
	
return (
	<>
		<Search/>
	</>
)

}

export default Index; 
