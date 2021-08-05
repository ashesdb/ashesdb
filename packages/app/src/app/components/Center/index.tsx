import React from 'react';

import useStyles from './useStyles';

interface Props {
	children: React.ReactElement;
}

export default function Center({ children }: Props) {
	const css = useStyles();

	return (
		<div className={css.container}>
			{children}
		</div>
	);
}
