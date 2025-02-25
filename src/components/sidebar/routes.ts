interface Route {
	href: string;
	id: string;
	label: string;
	icon?: string;
	target?: string;
}

export const routes: Route[] = [
	{
		href: '/',
		id: 'home',
		label: 'Home',
		icon: 'home',
	},
	{
		href: '/newbie',
		id: 'newbie',
		label: 'Newbie',
		icon: 'newbie',
	},
	{
		href: '/junior',
		id: 'junior',
		label: 'Junior',
		icon: 'junior',
	},
	{
		href: '/intermediate',
		id: 'intermediate',
		label: 'Intermediate',
		icon: 'intermediate',
	},
	{
		href: '/advanced',
		id: 'advanced',
		label: 'Advanced',
		icon: 'advanced',
	},
	{
		href: '/guru',
		id: 'guru',
		label: 'Guru',
		icon: 'guru',
	},
];
