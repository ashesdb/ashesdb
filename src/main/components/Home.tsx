import { Link } from 'wouter';

import { useFlag } from '~/core/flags';

import css from './Home.module.css';

export function Home() {
	const hasSkillTrees = useFlag('skilltrees');

	return (
		<div className={css.container}>
			<p>Coming soon.</p>
			{hasSkillTrees && <Link href="tools/skilltrees">Skill trees</Link>}
		</div>
	);
}
