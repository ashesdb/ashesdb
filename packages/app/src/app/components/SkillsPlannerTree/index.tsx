import React from 'react';

import useStyles from './useStyles';

interface Props {
	children: React.ReactNode;
	points: number;
	tree: ashesdb.SkillTree;
}

export default function SkillsPlannerTree({ children, points, tree }: Props) {
	const css = useStyles();

	return (
		<div className={css.container}>
			<header className={css.header} style={{ background: tree.color }}>
				<h2>{tree.name} ({points})</h2>
			</header>
			<div className={css.tree}>{children}</div>
		</div>
	);
}
