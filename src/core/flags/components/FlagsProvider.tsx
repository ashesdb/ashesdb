import type { ReactNode } from 'react';

import { Context } from '../Context';
import type { FlagsClient } from '../types';

type Props = {
	children: ReactNode;
	client: FlagsClient;
};

export function FlagsProvider({ children, client }: Props) {
	return <Context value={client}>{children}</Context>;
}
