import cn from 'classnames';
import type { ReactNode } from 'react';

import css from './Content.module.css';

type Props = {
	children: ReactNode;
	className?: string;
};

export function Content({ children, className }: Props) {
	return <div className={cn(css.content, className)}>{children}</div>;
}
