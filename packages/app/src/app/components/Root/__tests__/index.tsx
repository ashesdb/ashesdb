import { render, screen } from '@testing-library/react';
import React from 'react';

import useStyles from '../useStyles';
import Root from '..';

jest.mock('../../App', () => ({
	__esModule: true,
	default: () => <p>App</p>,
}));

jest.mock('../useStyles');

describe('<Root />', () => {
	it('should render create global styles and render the App component', () => {
		render(<Root />);
		expect(useStyles).toHaveBeenCalled();
		expect(screen.getByText('App')).toBeInTheDocument();
	});
});
