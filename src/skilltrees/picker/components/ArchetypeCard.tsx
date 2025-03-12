import { useMemo } from 'react';
import { Link } from 'wouter';

import { assetUrl } from '~/core/data';

import css from './ArchetypeCard.module.css';

type Props = {
	archetype: {
		displayName: string;
		name: string;
		backdrop: string;
		icon: string;
	};
	href: string;
};

export function ArchetypeCard({ archetype, href }: Props) {
	const style = useMemo(
		() => ({
			backgroundImage: `url(${assetUrl(archetype.backdrop)})`,
		}),
		[archetype],
	);

	return (
		<Link className={css.card} href={href} style={style}>
			<img
				alt={archetype.displayName}
				className={css.icon}
				src={assetUrl(archetype.icon)}
			/>
			{archetype.displayName}
		</Link>
	);
}
