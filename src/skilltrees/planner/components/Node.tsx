import cn from 'classnames';
import { useMemo } from 'react';

import type { Coords, Node } from '../types';
import css from './Node.module.css';

type Props = {
	maxCoords?: Coords;
	node: Node;
};

export function Node({ maxCoords, node }: Props) {
	const style = useMemo(() => {
		if (!node.coords || !maxCoords) return undefined;
		return {
			top: (maxCoords.y - node.coords.y) * 60 + 10,
			left: node.coords.x * 60 + 10,
		};
	}, [maxCoords, node.coords]);

	return (
		<button
			className={cn(css.node, {
				[css.effect]: node.type === 'effect',
				[css.positioned]: !!node.coords,
			})}
			style={style}
			type="button"
		/>
	);
}
