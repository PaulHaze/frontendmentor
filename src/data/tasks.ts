import newbieImage001 from '/src/assets/images/newbie_001.jpg';
import newbieImage002 from '/src/assets/images/newbie_002.jpg';
import newbieImage003 from '/src/assets/images/newbie_003.jpg';

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
		coverImg: newbieImage001,
		githubUrl: 'https://github.com/PaulHaze/frontendmentor',
		figmaUrl: 'https://figma.com',
		liveUrl: 'https://www.frontendmentor.io/challenges/recipe-page-KiTsR8QQKm',
		projectUrl:
			'https://www.frontendmentor.io/challenges/recipe-page-KiTsR8QQKm',
	},
	{
		id: 'newbie_002',
		difficulty: 'newbie',
		slug: 'recipe-page',
		title: 'Recipe Page',
		description:
			'Build out a responsive recipe page and get it looking as close to the design as possible.',
		date: '2025-02-26',
		thumbImg: 'src/assets/images/newbie_002.jpg',
		coverImg: newbieImage002,
		githubUrl: 'https://github.com/PaulHaze/frontendmentor',
		figmaUrl: 'https://figma.com',
		liveUrl: 'https://www.frontendmentor.io/challenges/recipe-page-KiTsR8QQKm',
		projectUrl:
			'https://www.frontendmentor.io/challenges/recipe-page-KiTsR8QQKm',
	},
	{
		id: 'newbie_003',
		difficulty: 'newbie',
		slug: 'recipe-page',
		title: 'Recipe Page',
		description:
			'Build out a responsive recipe page and get it looking as close to the design as possible.',
		date: '2025-02-26',
		thumbImg: 'src/assets/images/newbie_003.jpg',
		coverImg: newbieImage003,
		githubUrl: 'https://github.com/PaulHaze/frontendmentor',
		figmaUrl: 'https://figma.com',
		liveUrl: 'https://www.frontendmentor.io/challenges/recipe-page-KiTsR8QQKm',
		projectUrl:
			'https://www.frontendmentor.io/challenges/recipe-page-KiTsR8QQKm',
	},
];
