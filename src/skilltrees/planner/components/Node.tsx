import cn from 'classnames';
import { useMemo } from 'react';

import { assetUrl } from '~/core/data';

import type { Coords, Node, OnClickNode } from '../types';
import css from './Node.module.css';

type Props = {
	isActive?: boolean;
	isSelected?: boolean;
	maxCoords?: Coords;
	node: Node;
	onClick?: OnClickNode;
	onRightClick?: OnClickNode;
};

export function Node({
	isActive = false,
	isSelected = false,
	maxCoords,
	node,
	onClick,
	onRightClick,
}: Props) {
	const position = useMemo(() => {
		if (!node.coords || !maxCoords) return undefined;
		return {
			top: (maxCoords.y - node.coords.y) * 60 + 10,
			left: node.coords.x * 60 + 10,
		};
	}, [maxCoords, node.coords]);

	const image = useMemo(
		() => ({
			backgroundImage: node.icon ? `url(${assetUrl(node.icon)})` : undefined,
		}),
		[node],
	);

	const style = useMemo(() => ({ ...image, ...position }), [image, position]);

	return (
		<button
			className={cn(css.node, {
				[css.isActive]: isActive,
				[css.isSelected]: isSelected,
				[css.effect]: node.type === 'effect',
				[css.positioned]: !!node.coords,
			})}
			style={style}
			type="button"
			onClick={onClick}
			onContextMenu={onRightClick}
		/>
	);
}
