import type { ReactNode } from 'react';
import { Helmet } from 'react-helmet-async';

import { Context } from '../context';
import { useContextValue } from '../hooks/useContextValue';

type Props = {
	children: ReactNode;
};

export function ThemeProvider({ children }: Props) {
	const ctx = useContextValue();
	const { theme } = ctx;

	return (
		<>
			<Helmet>
				<html className={`theme-${theme.name}`} />
			</Helmet>
			<Context value={ctx}>{children}</Context>
		</>
	);
}
