import { createContext } from 'react';

import { useContextValue } from './hooks/useContextValue';

type ContextValue = ReturnType<typeof useContextValue>;

export const Context = createContext<ContextValue | null>(null);
