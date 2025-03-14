import cn from 'classnames';
import { useMemo } from 'react';

import css from './Node.module.css';

type Props = {
	coords?: {
		x: number;
		y: number;
	};
	maxCoords?: {
		x: number;
		y: number;
	};
};

export function Node({ coords, maxCoords }: Props) {
	const style = useMemo(() => {
		if (!coords || !maxCoords) return undefined;
		return {
			top: (maxCoords.y - coords.y) * 60 + 10,
			left: coords.x * 60 + 10,
		};
	}, [coords, maxCoords]);

	return (
		<button
			className={cn(css.node, { [css.positioned]: !!coords })}
			style={style}
			type="button"
		/>
	);
}
