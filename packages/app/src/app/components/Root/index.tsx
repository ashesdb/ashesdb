import React from 'react';

import App from '../App';
import useStyles from './useStyles';

export default function Root() {
	useStyles();

	return (
		<App />
	);
}
