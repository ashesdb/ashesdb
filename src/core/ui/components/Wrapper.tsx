import cn from 'classnames';
import type { ReactNode } from 'react';

import css from './Wrapper.module.css';

type Props = {
	children: ReactNode;
	className?: string;
};

export function Wrapper({ children, className }: Props) {
	return <div className={cn(css.page, className)}>{children}</div>;
}
