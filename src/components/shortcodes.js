import React from 'react';
import Header from '@layouts/header'
import Link from '@components/link'
import Games from '@components/games'
import Skills from '@components/skills'
import {Image, Text} from 'theme-ui'

export default {
	h1: props => <Text as='h1' className="title" {...props}/>,
	h2: props => <Text as="h2" className="subtitle" {...props}/>,
	h3: props => <Text as="h3" className="subtext" {...props}/>,
	img: props => <Image {...props} className="image" />,
 	Header, 
	Link,
	Games,
	Skills
}
