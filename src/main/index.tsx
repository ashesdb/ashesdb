import '~/core/tokens/layout.css';
import './global.css';

import { createRoot } from 'react-dom/client';

import { Root } from './components/Root';

(() => {
	const domNode = document.getElementById('app-root');
	if (!domNode) {
		throw new Error('Could not find DOM node #app-root');
	}

	const root = createRoot(domNode);
	root.render(<Root />);
})();
