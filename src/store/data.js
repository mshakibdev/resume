import ApplicantsPhoto from '../assets/NEW.jpg'
export const applicantsData = [
	{
		_id: '5b21ca3eeb7f6fbccd471818',
		name: 'Md Shakib Hassan',
		photo: ApplicantsPhoto,
		designation: 'Frontend Developer',
		phone: '+8801614158045',
		mail: 'shakibhassanbd123@gmail.com',
		profile_details:
			"I am a frontend developer who enjoys exploring and solving problems .I have six months of personal experience in Frontend development(HTML,CSS and REACT). I am currently working with REACT and it s technology like REDUX ,CONTEXT API and also interested to work with new technology .I believe I would be one of the top contributors to your team, carrying my load and anything else to support the company's strategic plan and bottom line.",
		main_skills: [
			{id: 1, skill: 'User Interface / Design (UI)'},
			{id: 2, skill: 'Front-End Development'},
			{id: 3, skill: 'Back-End Development'},
		],
		tools: [
			{id: 1, tool: 'React , Redux ,Context Api'},
			{id: 2, tool: 'Figma'},
			{id: 3, tool: 'HTML5, CSS 3, JavaScript'},
		],
		work_experience: [
			{
				company_name: 'ezprinters.co.uk',
				working_period: 'June 2019 - March 2021',
				details:
					'I work as a remote webdeveloper at ezprinters.co.uk developing website in laravel and cutomizing theme in wordpress',
			},
		],
		education: [
			{
				id: 1,
				degree: 'Bachelor of Computer Science and Engineering',
				institute: 'Daffodil International University',
				session: '2015-2019',
			},
			{
				id: 2,
				degree: 'Higher Secondary Certificate',
				institute: 'St.Joseph Higer Secondary School',
				session: '2011-2013',
			},
		],
		training: [
			{
				id: 1,
				course: 'React Course',
				institute: 'Udemy',
				session: '2015-2019',
			},
			{
				id: 2,
				course: 'Js Course',
				institute: 'PluralSight',
				session: '2021-2023',
			},
		],
		projects: [
			{id: 1, projectName: 'React Project', codeLink: '', LiveLink: ''},
			{id: 2, projectName: 'Ecommerce Project', codeLink: '', LiveLink: ''},
			{id: 3, projectName: 'Angular Project', codeLink: '', LiveLink: ''},
		],
	},
]
