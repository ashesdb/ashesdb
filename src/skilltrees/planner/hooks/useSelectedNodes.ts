import { useCallback, useMemo, useState } from 'react';

import type { Node, OnClickNode } from '../types';

export function useSelectedNodes(nodes: Record<string, Node>) {
	const [selected, setSelected] = useState<Record<string, number | string>>({});

	const createOnClick = useCallback(
		(id: string): OnClickNode =>
			(e) => {
				e.preventDefault();

				const node = nodes[id];
				if (node.type === 'choice') {
					return;
				}

				setSelected((s) => ({ ...s, [id]: 1 }));
			},
		[nodes],
	);

	const createOnRightClick = useCallback(
		(id: string): OnClickNode =>
			(e) => {
				e.preventDefault();
				setSelected((s) => {
					if (!s[id]) return s;
					const newState = { ...s };
					delete newState[id];
					return newState;
				});
			},
		[nodes],
	);

	return useMemo(
		() => ({ createOnClick, createOnRightClick, selectedNodes: selected }),
		[createOnClick, createOnRightClick, selected],
	);
}
