import cn from 'classnames';
import React from 'react';

import useStyles from './useStyles';

interface Props {
	children: React.ReactNode;
	threshold: number;
	unlocked: boolean;
}

export default function SkillsPlannerTier({ children, threshold, unlocked }: Props) {
	const css = useStyles();

	return (
		<div className={cn(css.container, { [css.unlocked]: unlocked })}>
			<div className={css.overlay}>
				<p>{threshold} points to unlock</p>
			</div>
			{children}
		</div>
	);
}
