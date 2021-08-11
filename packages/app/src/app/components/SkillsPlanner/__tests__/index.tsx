import { fireEvent, render, screen } from '@testing-library/react';
import React from 'react';

import SkillsPlanner from '..';

jest.mock('../../SkillsPlannerSkill', () => ({
	__esModule: true,
	default: jest.fn(({ points, skill, onChange }) => {
		return (
			<button type="button" onClick={() => { onChange(1); }}>
				{skill.name} ({points})
			</button>
		);
	}),
}))

describe('<SkillsPlanner />', () => {
	it('should render a message if build archetype is not supported', () => {
		const build = { archetypeId: 'fighter', pointsPerSkill: {} };
		render(<SkillsPlanner build={build} onChange={() => {}} />);
		expect(screen.getByText('Supported archetype is not supported yet.')).toBeInTheDocument();
	});

	it('should render the skills planner for the cleric archetype', () => {
		const build = { archetypeId: 'cleric', pointsPerSkill: {} };
		render(<SkillsPlanner build={build} onChange={() => {}} />);

		expect(screen.getByText('Passive (0)')).toBeInTheDocument();
		expect(screen.getByText('Active (0)')).toBeInTheDocument();

		expect(screen.getByRole('button', { name: 'Increased Healing (0)' })).toBeInTheDocument();
		expect(screen.getByRole('button', { name: 'Mana Regeneration (0)' })).toBeInTheDocument();
		expect(screen.getByRole('button', { name: 'Maximum Mana (0)' })).toBeInTheDocument();
		expect(screen.getByRole('button', { name: 'Health Regeneration (0)' })).toBeInTheDocument();
		expect(screen.getByRole('button', { name: 'Critical Hit Rate (0)' })).toBeInTheDocument();
		expect(screen.getByRole('button', { name: 'Maximum Health (0)' })).toBeInTheDocument();
		expect(screen.getByRole('button', { name: 'Defense Mitigation (0)' })).toBeInTheDocument();
		expect(screen.getByRole('button', { name: 'Disable Defense (0)' })).toBeInTheDocument();
		expect(screen.getByRole('button', { name: 'Cooldown Reduction (0)' })).toBeInTheDocument();
		expect(screen.getByRole('button', { name: 'Movement Speed (0)' })).toBeInTheDocument();

		expect(screen.getByRole('button', { name: 'Judgment (0)' })).toBeInTheDocument();
		expect(screen.getByRole('button', { name: 'Divine Light (0)' })).toBeInTheDocument();
		expect(screen.getByRole('button', { name: 'Castigation (0)' })).toBeInTheDocument();
		expect(screen.getByRole('button', { name: 'Regeneration (0)' })).toBeInTheDocument();
		expect(screen.getByRole('button', { name: 'Divine Censure (0)' })).toBeInTheDocument();
		expect(screen.getByRole('button', { name: 'Resurrection (0)' })).toBeInTheDocument();
		expect(screen.getByRole('button', { name: 'Devotion (0)' })).toBeInTheDocument();
		expect(screen.getByRole('button', { name: 'Hallowed Ground (0)' })).toBeInTheDocument();
		expect(screen.getByRole('button', { name: 'Radiant Burst (0)' })).toBeInTheDocument();
	});

	it('should render the skills planner for the mage archetype', () => {
		const build = { archetypeId: 'mage', pointsPerSkill: {} };
		render(<SkillsPlanner build={build} onChange={() => {}} />);

		expect(screen.getByText('Passive (0)')).toBeInTheDocument();
		expect(screen.getByText('Active (0)')).toBeInTheDocument();

		expect(screen.getByRole('button', { name: 'Attack Damage (0)' })).toBeInTheDocument();
		expect(screen.getByRole('button', { name: 'Mana Regeneration (0)' })).toBeInTheDocument();
		expect(screen.getByRole('button', { name: 'Critical Hit Damage (0)' })).toBeInTheDocument();
		expect(screen.getByRole('button', { name: 'Health Regeneration (0)' })).toBeInTheDocument();
		expect(screen.getByRole('button', { name: 'Critical Hit Rate (0)' })).toBeInTheDocument();
		expect(screen.getByRole('button', { name: 'Maximum Health (0)' })).toBeInTheDocument();
		expect(screen.getByRole('button', { name: 'Defense Mitigation (0)' })).toBeInTheDocument();
		expect(screen.getByRole('button', { name: 'Disable Chance (0)' })).toBeInTheDocument();
		expect(screen.getByRole('button', { name: 'Cooldown Reduction (0)' })).toBeInTheDocument();
		expect(screen.getByRole('button', { name: 'Movement Speed (0)' })).toBeInTheDocument();

		expect(screen.getByRole('button', { name: 'Fireball (0)' })).toBeInTheDocument();
		expect(screen.getByRole('button', { name: 'Blink (0)' })).toBeInTheDocument();
		expect(screen.getByRole('button', { name: 'Lavastorm (0)' })).toBeInTheDocument();
		expect(screen.getByRole('button', { name: 'Drain Essence (0)' })).toBeInTheDocument();
		expect(screen.getByRole('button', { name: 'Black Hole (0)' })).toBeInTheDocument();
		expect(screen.getByRole('button', { name: 'Gift of the Magi (0)' })).toBeInTheDocument();
		expect(screen.getByRole('button', { name: 'Thundershock (0)' })).toBeInTheDocument();
		expect(screen.getByRole('button', { name: 'Meteor Storm (0)' })).toBeInTheDocument();
		expect(screen.getByRole('button', { name: 'Prismatic Beam (0)' })).toBeInTheDocument();
	});

	it('should render the skills planner for the tank archetype', () => {
		const build = { archetypeId: 'tank', pointsPerSkill: {} };
		render(<SkillsPlanner build={build} onChange={() => {}} />);

		expect(screen.getByText('Passive (0)')).toBeInTheDocument();
		expect(screen.getByText('Active (0)')).toBeInTheDocument();

		expect(screen.getByRole('button', { name: 'Block Chance (0)' })).toBeInTheDocument();
		expect(screen.getByRole('button', { name: 'Mana Regeneration (0)' })).toBeInTheDocument();
		expect(screen.getByRole('button', { name: 'Healing Received (0)' })).toBeInTheDocument();
		expect(screen.getByRole('button', { name: 'Health Regeneration (0)' })).toBeInTheDocument();
		expect(screen.getByRole('button', { name: 'Critical Hit Rate (0)' })).toBeInTheDocument();
		expect(screen.getByRole('button', { name: 'Maximum Health (0)' })).toBeInTheDocument();
		expect(screen.getByRole('button', { name: 'Defense Mitigation (0)' })).toBeInTheDocument();
		expect(screen.getByRole('button', { name: 'Physical Evasion Bonus (0)' })).toBeInTheDocument();
		expect(screen.getByRole('button', { name: 'Cooldown Reduction (0)' })).toBeInTheDocument();
		expect(screen.getByRole('button', { name: 'Movement Speed (0)' })).toBeInTheDocument();

		expect(screen.getByRole('button', { name: 'Onslaught (0)' })).toBeInTheDocument();
		expect(screen.getByRole('button', { name: 'Lacerate (0)' })).toBeInTheDocument();
		expect(screen.getByRole('button', { name: 'Javelin (0)' })).toBeInTheDocument();
		expect(screen.getByRole('button', { name: 'Resounding Smash (0)' })).toBeInTheDocument();
		expect(screen.getByRole('button', { name: 'Bulwark (0)' })).toBeInTheDocument();
		expect(screen.getByRole('button', { name: 'Weapon Toss (0)' })).toBeInTheDocument();
		expect(screen.getByRole('button', { name: 'Shockwave (0)' })).toBeInTheDocument();
		expect(screen.getByRole('button', { name: 'Myrmidon\'s Fury (0)' })).toBeInTheDocument();
		expect(screen.getByRole('button', { name: 'Ultimate Defense (0)' })).toBeInTheDocument();
	});

	it('should call given change handler when a skill is clicked', () => {
		const build = { archetypeId: 'mage', pointsPerSkill: {} };
		const handleChange = jest.fn();
		render(<SkillsPlanner build={build} onChange={handleChange} />);

		fireEvent.click(screen.getByRole('button', { name: 'Fireball (0)' }));
		expect(handleChange).toHaveBeenCalled();
	});
});
