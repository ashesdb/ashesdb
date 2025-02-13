import type { ReactNode } from 'react';

import css from './ErrorPage.module.css';

type Props = {
	message: ReactNode;
	title: ReactNode;
};

export function ErrorPage({ message, title }: Props) {
	return (
		<div className={css.container}>
			<h1 className={css.title}>{title}</h1>
			<p className={css.message}>{message}</p>
		</div>
	);
}
