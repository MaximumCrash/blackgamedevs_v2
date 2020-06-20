import React from 'react';
import {MDXProvider} from '@mdx-js/react';

import {SiteProvider} from './SiteContext';
import Shortcodes from '@components/shortcodes';
import Header from './header';
import Footer from './footer';
import {Box} from 'theme-ui'

const Layout = ({children}) => (
	<Box sx={{m: '0 auto', padding: '50px 20px 20px', maxWidth: '1280px', fontFamily: 'heading', bg: 'background', color: 'text'}}>
		<Header/>
		<MDXProvider components={Shortcodes}>
			<SiteProvider>
				{children}
			</SiteProvider>
		</MDXProvider>
		<Footer/>
	</Box>
)

export default Layout;
