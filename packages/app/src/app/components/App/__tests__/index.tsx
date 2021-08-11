import { render, screen } from '@testing-library/react';
import React from 'react';
import { MemoryRouter } from 'react-router-dom';

import App from '..';

jest.mock('../../SkillsPlannerContainer', () => ({
	__esModule: true,
	default: () => <p>Skills Planner Container</p>,
}));

describe('<App />', () => {
	it('should render nothing for the root url', () => {
		render(<MemoryRouter><App /></MemoryRouter>);
		expect(screen.queryByText('Skills Planner Container')).not.toBeInTheDocument();
	});

	it('should the skills planner container for /skills-planner', () => {
		render(<MemoryRouter initialEntries={['/skills-planner']}><App /></MemoryRouter>);
		expect(screen.queryByText('Skills Planner Container')).toBeInTheDocument();
	});
});
