import { LogoType } from './LogoType';
import css from './Navigation.module.css';

export function Navigation() {
	return (
		<nav className={css.navigation}>
			<LogoType />
		</nav>
	);
}
