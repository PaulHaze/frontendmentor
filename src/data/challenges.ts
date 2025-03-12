import newbie_001 from '/src/assets/img/challenges/newbie_001.jpg';
import newbie_002 from '/src/assets/img/challenges/newbie_002.jpg';
import newbie_003 from '/src/assets/img/challenges/newbie_003.jpg';

type ISODateString = `${number}-${number}-${number}`;

type Challenge = {
	id: string;
	difficulty: 'newbie' | 'junior' | 'intermediate' | 'advanced' | 'guru';
	slug: string;
	title: string;
	description: string;
	date: ISODateString;
	thumbImg?: string;
	coverImg: ImageMetadata;
	githubUrl: string;
	figmaUrl: string;
	liveUrl: string;
	projectUrl: string;
};

export const challenges: Challenge[] = [
	{
		id: 'newbie_001',
		difficulty: 'newbie',
		slug: 'recipe-page',
		title: 'Recipe Page',
		description:
			'Build out a responsive recipe page and get it looking as close to the design as possible.',
		date: '2025-02-26',
		thumbImg: 'src/assets/images/newbie_001.jpg',
		coverImg: newbie_001,
		githubUrl: 'https://github.com/PaulHaze/frontendmentor',
		figmaUrl: 'https://figma.com',
		liveUrl: 'https://www.frontendmentor.io/challenges/recipe-page-KiTsR8QQKm',
		projectUrl:
			'https://www.frontendmentor.io/challenges/recipe-page-KiTsR8QQKm',
	},
	{
		id: 'newbie_002',
		difficulty: 'newbie',
		slug: 'social-links-profile',
		title: 'Social Links Profile',
		description:
			'Build out a social link-sharing profile. It can even be personalized and used to share all of your social profiles.',
		date: '2025-02-26',
		thumbImg: 'src/assets/images/newbie_002.jpg',
		coverImg: newbie_002,
		githubUrl: 'https://github.com/PaulHaze/frontendmentor',
		figmaUrl: 'https://figma.com',
		liveUrl:
			'https://www.frontendmentor.io/challenges/social-links-profile-UG32l9m6dQ',
		projectUrl:
			'https://www.frontendmentor.io/challenges/social-links-profile-UG32l9m6dQ',
	},
	{
		id: 'newbie_003',
		difficulty: 'newbie',
		slug: 'blog-preview-card',
		title: 'Blog Preview Card',
		description:
			'An HTML & CSS-only challenge is a perfect project for beginners getting up to speed with HTML and CSS fundamentals, like HTML structure and the box model.',
		date: '2025-02-26',
		thumbImg: 'src/assets/images/newbie_003.jpg',
		coverImg: newbie_003,
		githubUrl: 'https://github.com/PaulHaze/frontendmentor',
		figmaUrl: 'https://figma.com',
		liveUrl:
			'https://www.frontendmentor.io/challenges/blog-preview-card-ckPaj01IcS',
		projectUrl:
			'https://www.frontendmentor.io/challenges/blog-preview-card-ckPaj01IcS',
	},
];
