import { Wrapper } from '~/core/ui';

import { LogoType } from './LogoType';
import css from './Navigation.module.css';

export function Navigation() {
	return (
		<nav className={css.outer}>
			<Wrapper className={css.inner}>
				<LogoType />
			</Wrapper>
		</nav>
	);
}
