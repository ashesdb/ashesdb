import { useContext, useEffect, useState } from 'react';

import { Context } from '../Context';

export function useFlag(name: string) {
	const client = useContext(Context);
	if (!client) {
		throw new Error('`useFlag` may only be used within a FlagsProvider');
	}

	const [value, setValue] = useState(() => client.get(name));
	useEffect(() => client.subscribe(name, setValue), [name]);

	return value;
}
