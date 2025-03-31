import { Link } from 'wouter';

import css from './LogoType.module.css';

export function LogoType() {
	return (
		<h1 className={css.logo}>
			<Link className={css.link} href="/">
				Ashes<span>DB</span>
			</Link>
		</h1>
	);
}
