import { render, screen } from '@testing-library/react';
import React from 'react';

import SkillsPlannerTier from '..';

describe('<SkillsPlannerTier />', () => {
	it('should render tier and its children, without a visible overlay', () => {
		render(
			<SkillsPlannerTier threshold={0} unlocked={true}>
				<p>beep boop</p>
			</SkillsPlannerTier>,
		);
		expect(screen.getByText('beep boop')).toBeInTheDocument();
		expect(screen.getByText('0 points to unlock')).not.toBeVisible();
	});

	it('should render tier and its children, with a visible overlay', () => {
		render(
			<SkillsPlannerTier threshold={3} unlocked={false}>
				<p>beep boop</p>
			</SkillsPlannerTier>,
		);
		expect(screen.getByText('3 points to unlock')).toBeVisible();
	});
});
