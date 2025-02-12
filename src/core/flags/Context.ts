import { createContext } from 'react';

import { FlagsClient } from './types';

export const Context = createContext<FlagsClient | null>(null);
