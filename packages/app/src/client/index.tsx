import React from 'react';
import { hydrate } from 'react-dom';

import Root from '../app/components/Root';

(() => {
	const root = document.getElementById('app-root');
	if (!root) throw new Error('No element with id `app-root` found');

	hydrate(<Root />, root, () => {
		const ssrStyles = document.getElementById('ssr-styles');
		if (ssrStyles?.parentNode) ssrStyles.parentNode.removeChild(ssrStyles);
	});
})();
