import { render, screen } from '@testing-library/react';
import React from 'react';
import { MemoryRouter } from 'react-router-dom';

import SkillsPlannerArchetypes from '..';

describe('<SkillsPlannerArchetypes />', () => {
	['tank', 'mage', 'cleric'].forEach(archetype => {
		it(`should render a clickable tile for ${archetype}`, () => {
			render(<SkillsPlannerArchetypes />, { wrapper: MemoryRouter });
			const tile = screen.getByRole('link', { name: new RegExp(`^${archetype}$`, 'i') });
			expect(tile).toBeInTheDocument();
		});
	});

	['fighter', 'rogue', 'ranger', 'summoner', 'bard'].forEach(archetype => {
		it(`should render a non-clickable tile for ${archetype}`, () => {
			render(<SkillsPlannerArchetypes />, { wrapper: MemoryRouter });
			const tile = screen.getByText(new RegExp(`^${archetype}$`, 'i'));
			expect(tile).toBeInTheDocument();
			expect(tile.tagName.toLowerCase()).toBe('span');
		});
	});
});
