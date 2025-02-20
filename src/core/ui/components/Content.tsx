import type { ReactNode } from 'react';

import css from './Content.module.css';

type Props = {
	children: ReactNode;
};

export function Content({ children }: Props) {
	return <div className={css.content}>{children}</div>;
}
