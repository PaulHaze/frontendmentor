type Task = {
	id: string;
	slug: string;
	title: string;
	description: string;
	difficulty: string;
	date: string;
	thumImg: string;
	coverImg: string;
	githubUrl: string;
	figmaUrl: string;
	liveUrl: string;
	projectUrl: string;
};

export const tasks: Task[] = [
	{
		id: '1',
		slug: 'task-1',
		title: 'Task 1',
		description: 'Task 1 description',
		difficulty: 'easy',
		date: '2021-10-01',
		thumImg: '/images/thum-1.jpg',
		coverImg: '/images/cover-1.jpg',
		githubUrl: 'https://github.com',
		figmaUrl: 'https://figma.com',
		liveUrl: 'https://live.com',
		projectUrl: 'https://project.com',
	},
	{
		id: '2',
		slug: 'task-2',
		title: 'Task 2',
		description: 'Task 2 description',
		difficulty: 'medium',
		date: '2021-10-02',
		thumImg: '/images/thum-2.jpg',
		coverImg: '/images/cover-2.jpg',
		githubUrl: 'https://github.com',
		figmaUrl: 'https://figma.com',
		liveUrl: 'https://live.com',
		projectUrl: 'https://project.com',
	},
	{
		id: '3',
		slug: 'task-3',
		title: 'Task 3',
		description: 'Task 3 description',
		difficulty: 'hard',
		date: '2021-10-03',
		thumImg: '/images/thum-3.jpg',
		coverImg: '/images/cover-3.jpg',
		githubUrl: 'https://github.com',
		figmaUrl: 'https://figma.com',
		liveUrl: 'https://live.com',
		projectUrl: 'https://project.com',
	},
];
