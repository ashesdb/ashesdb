import type { FullSkillTree } from '~/skilltrees/types';

import { useSkillTree } from '../hooks/useSkillTree';
import css from './SkillTree.module.css';

type Props = {
	data: FullSkillTree;
};

export function SkillTree({ data }: Props) {
	const { containerProps, nodes } = useSkillTree(data);

	return (
		<div className={css.container} {...containerProps}>
			{nodes.map((node) => (
				<button key={node.nodeId} className={css.node} {...node.props} />
			))}
		</div>
	);
}
