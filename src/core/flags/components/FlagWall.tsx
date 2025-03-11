import type { ReactNode } from 'react';

import { useFlag } from '../hooks/useFlag';

type Props = {
	children: ReactNode;
	name: string;
};

export function FlagWall({ children, name }: Props) {
	const isEnabled = useFlag(name);
	if (!isEnabled) return null;

	return <>{children}</>;
}
