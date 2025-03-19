import { useMemo, useState } from 'react';

import { ThemeName } from '../types';

export function useContextValue(initialTheme = ThemeName.Dark) {
	const [themeName] = useState<ThemeName>(initialTheme);

	const theme = useMemo(() => ({ name: themeName }), [themeName]);

	return useMemo(() => ({ theme }), [theme]);
}
