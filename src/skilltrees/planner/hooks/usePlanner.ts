import { useMemo } from 'react';

import type { SkillTree } from '~/skilltrees/data';

import type { Connector, Node } from '../types';

export function usePlanner(data: SkillTree) {
	const skillToNodeMap = useMemo(
		() =>
			Object.values(data.nodes).reduce<Record<string, string>>((acc, node) => {
				if ('skillId' in node) {
					return { ...acc, [node.skillId]: node.id };
				}

				if ('slotId' in node) {
					const slot = data.slots[node.slotId];
					return slot.skillIds.reduce(
						(innerAcc, skillId) => ({ ...innerAcc, [skillId]: node.id }),
						acc,
					);
				}

				return acc;
			}, {}),
		[data],
	);

	const nodes = useMemo(() => {
		return Object.entries(data.coords).reduce<Record<string, Node>>(
			(acc, [id, coords]) => {
				const node: Node = { id, coords };
				const n = data.nodes[id];
				if (n.skillsRequirement) {
					node.requiredNodes = n.skillsRequirement.map((id) => {
						const req = data.requirements[id];
						if ('nodeId' in req) {
							return req.nodeId;
						}
						return skillToNodeMap[req.skillId];
					});
				}
				return { ...acc, [id]: node };
			},
			{},
		);
	}, [data, skillToNodeMap]);

	const connectors = useMemo(
		() =>
			Object.values(nodes)
				.filter((node) => !!node.requiredNodes)
				.reduce<Connector[]>(
					(acc, node) => [
						...acc,
						...node.requiredNodes!.map((id) => ({
							from: data.coords[id],
							to: node.coords,
						})),
					],
					[],
				),
		[nodes],
	);

	return useMemo(() => ({ connectors, nodes }), [connectors, nodes]);
}
