import React, {useEffect, useState} from 'react';

import Sticky from "react-sticky-el"
import {motion} from 'framer-motion';
import { Image } from "theme-ui"

import backToTopIcon from '@public/back-to-top.svg';

const ScrollToTop = () => {
	const [visible, setVisible] = useState(false);

	const onScroll = () => {
		if (window.scrollY >= 364) {
			setVisible(true);
		}
		else {
			setVisible(false);
		}
	} 

	useEffect(() => {
		window.addEventListener('scroll', onScroll);

		return (() => {
			window.removeEventListener('scroll', onScroll);
		});

	}, [])

	return (
		<Sticky mode='bottom'>
          <Image src={backToTopIcon} onClick={() => {window.scrollTo({top: 0, behavior: 'smooth'})}} alt="Back to top icon" aria-label="Back to top icon" sx={{cursor: 'pointer', filter: 'invert(80%)', position: 'fixed', width: '3.32rem', right: '0', bottom: visible ? '32px' : '0px', opacity: visible ? '1' : '0', pointerEvents: visible ? 'initial' : 'none', transition: 'all .164s ease-in-out'}}/>
        </Sticky>
	)
}

export default ScrollToTop;
