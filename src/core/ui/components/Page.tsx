import type { ReactNode } from 'react';

import css from './Page.module.css';

type Props = {
	children: ReactNode;
};

export function Page({ children }: Props) {
	return <div className={css.page}>{children}</div>;
}
