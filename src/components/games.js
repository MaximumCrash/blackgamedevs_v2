import React from 'react';
import {Box} from 'theme-ui';

import icon from '@public/icons/icon-game.svg';
import Link from './link';

const Games = ({children}) => {
	const _Children = React.Children.toArray(children);

	return (
		<Box className="games">
			<img src={icon} alt="Games"/>
			{_Children.map((game) => {
				console.log(game)

				return (<>Game</>)
			})}
		</Box>
	)
}

export default Games;
