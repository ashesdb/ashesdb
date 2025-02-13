import type { ReactNode } from 'react';

import css from './ErrorPage.module.css';

type Props = {
	message: ReactNode;
	title: ReactNode;
};

export function ErrorPage({ message, title }: Props) {
	return (
		<div className={css.outer}>
			<div className={css.inner}>
				<h2 className={css.title}>{title}</h2>
				<p className={css.message}>{message}</p>
			</div>
		</div>
	);
}
