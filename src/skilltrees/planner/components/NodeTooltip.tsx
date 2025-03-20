import { Tooltip } from '@ark-ui/react/tooltip';
import cn from 'classnames';
import type { ReactNode } from 'react';

import { assetUrl } from '~/core/data';

import type { Node } from '../types';
import css from './NodeTooltip.module.css';

type Props = {
	children: ReactNode;
	node: Node;
};

export function NodeTooltip({ children, node }: Props) {
	return (
		<Tooltip.Root
			closeDelay={0}
			closeOnClick={false}
			closeOnPointerDown={false}
			openDelay={250}
			positioning={{
				placement: 'right',
				offset: { crossAxis: 0, mainAxis: 12 },
			}}
		>
			<Tooltip.Trigger asChild>{children}</Tooltip.Trigger>
			<Tooltip.Positioner className={css.positioner}>
				<Tooltip.Content className={css.content}>
					<header className={css.header}>
						<h3 className={css.name}>{node.name}</h3>
						{!!node.icon && (
							<img
								alt={node.name}
								className={cn(css.icon, {
									[css.effect]: node.type === 'effect',
								})}
								src={assetUrl(node.icon)}
							/>
						)}
					</header>
					<div className={css.description}>{node.description}</div>
				</Tooltip.Content>
			</Tooltip.Positioner>
		</Tooltip.Root>
	);
}
