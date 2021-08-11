import { fireEvent, render, screen } from '@testing-library/react';
import { createMemoryHistory } from 'history';
import React from 'react';
import { MemoryRouter, Route, Router, Routes } from 'react-router-dom';

import SkillsPlanner from '../../SkillsPlanner';
import SkillsPlannerContainer from '..';

jest.mock('../../SkillsPlannerArchetypes', () => ({
	__esModule: true,
	default: () => <div>Select archetype.</div>,
}));

jest.mock('../../SkillsPlanner');

describe('<SkillsPlannerContainer />', () => {
	it('should render tier and its children, without a visible overlay', () => {
		render(
			<MemoryRouter initialEntries={["/skills-planner"]}>
				<Routes>
					<Route path="skills-planner/*" element={<SkillsPlannerContainer />} />
				</Routes>
			</MemoryRouter>
		);
		expect(screen.getByText('Select archetype.')).toBeInTheDocument();
	});

	it('should render an error if the build string is invalid', () => {
		render(
			<MemoryRouter initialEntries={["/skills-planner/shaman"]}>
				<Routes>
					<Route path="skills-planner/*" element={<SkillsPlannerContainer />} />
				</Routes>
			</MemoryRouter>
		);
		expect(screen.getByText('Invalid archetype "shaman" specified.')).toBeInTheDocument();
	});

	it('should render the skills planner if the build string is valid', () => {
		(SkillsPlanner as jest.Mock).mockReturnValue(<button type="button">Skills planner</button>);
		render(
			<MemoryRouter initialEntries={["/skills-planner/mage"]}>
				<Routes>
					<Route path="skills-planner/*" element={<SkillsPlannerContainer />} />
				</Routes>
			</MemoryRouter>
		);
		expect(screen.getByRole('button', { name: 'Skills planner' })).toBeInTheDocument();
	});

	it('should navigate to the new build string when the build is changed', () => {
		(SkillsPlanner as jest.Mock).mockImplementation(({ onChange }) => (
			<button type="button" onClick={() => { onChange('fireball', 1); }}>Skills planner</button>
		));
		const history = createMemoryHistory({ initialEntries: ["/skills-planner/mage"] });
		render(
			<Router navigator={history} location={history.location}>
				<Routes>
					<Route path="skills-planner/*" element={<SkillsPlannerContainer />} />
				</Routes>
			</Router>
		);

		const button = screen.getByRole('button', { name: 'Skills planner' });
		expect(history.location.pathname).toBe('/skills-planner/mage');
		fireEvent.click(button);
		expect(history.location.pathname).toBe('/skills-planner/mage/0:0000000000100000000');
	});

	it('should log an error if an impossible change was requested', () => {
		(SkillsPlanner as jest.Mock).mockImplementation(({ onChange }) => (
			<button type="button" onClick={() => { onChange('fireball', -1); }}>Skills planner</button>
		));
		render(
			<MemoryRouter initialEntries={["/skills-planner/mage"]}>
				<Routes>
					<Route path="skills-planner/*" element={<SkillsPlannerContainer />} />
				</Routes>
			</MemoryRouter>
		);

		jest.spyOn(console, 'error').mockImplementation(() => {});

		const button = screen.getByRole('button', { name: 'Skills planner' });
		fireEvent.click(button);
		expect(console.error).toHaveBeenCalledWith(
			'Failed to alter build',
			new Error('Skill "Fireball" is already at 0 points.'),
		);
	});
});
