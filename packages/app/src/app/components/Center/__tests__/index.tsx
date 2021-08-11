import { render, screen } from '@testing-library/react';
import React from 'react';

import Center from '..';

describe('<Center />', () => {
	it('should render tier its children', () => {
		render(<Center><p>beep boop</p></Center>);
		expect(screen.getByText('beep boop')).toBeInTheDocument();
	});
});
