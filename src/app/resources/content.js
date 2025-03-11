import { InlineCode } from "@/once-ui/components";

const person = {
	firstName: "Kuang Hsien",
	lastName: "Ma",
	get name() {
		return `${this.firstName} ${this.lastName}`;
	},
	role: "Fullstack Engineer",
	avatar: "/images/avatar.jpg",
	location: "Asia/Taipei", // Expecting the IANA time zone identifier, e.g., 'Europe/Vienna'
	languages: ["Chinese", "English"], // optional: Leave the array empty if you don't want to display languages
};

const newsletter = {
	display: true,
	title: <>Subscribe to {person.firstName}'s Newsletter</>,
	description: (
		<>
			I occasionally write about design, technology, and share thoughts on the
			intersection of creativity and engineering.
		</>
	),
};

const social = [
	// Links are automatically displayed.
	// Import new icons in /once-ui/icons.ts
	{
		name: "GitHub",
		icon: "github",
		link: "https://github.com/Jessiemkh",
	},
	{
		name: "LinkedIn",
		icon: "linkedin",
		link: "",
	},
	{
		name: "X",
		icon: "x",
		link: "",
	},
	{
		name: "Email",
		icon: "email",
		link: "mailto:mkh303100105@gamil.com",
	},
];

const home = {
	label: "Home",
	title: `${person.name}'s Portfolio`,
	description: `Portfolio website showcasing my work as a ${person.role}`,
	headline: <>Fullstack engineer and builder</>,
	subline: (
		<>
			I'm Jessie, a fullstack engineer , also a pharmacist—quite an unusual
			combination, isn’t it?
			<br /> As a <InlineCode> fullstack engineer </InlineCode> , I craft
			intuitive user experiences. After hours, I build my own projects.
		</>
	),
};

const about = {
	label: "About",
	title: "About me",
	description: `Meet ${person.name}, ${person.role} from ${person.location}`,
	tableOfContent: {
		display: true,
		subItems: false,
	},
	avatar: {
		display: true,
	},
	calendar: {
		display: true,
		link: "https://cal.com/kh-m-gvimou",
	},
	intro: {
		display: true,
		title: "Introduction",
		description: (
			<>
				<div>
					<p>
						I’m a full-stack engineer, but I’m also a pharmacist—quite an
						unusual combination, isn’t it? In the field of software engineering,
						I’m passionate about simplifying complex challenges and designing
						solutions that are both intuitive and user-friendly. As a
						pharmacist, I bring extensive clinical experience in medicine to the
						table. My interdisciplinary background allows me to approach
						problems from unique perspectives and gain a deeper understanding of
						user needs. Whether it’s fixing bugs in code or tackling challenges
						in clinical medicine, I excel at efficiently getting the job done!
					</p>
				</div>
				<div>
					<p>
						我是個全端工程師，但同時也是一名藥師——這樣的跨界組合有點特殊？
						在軟體工程領域，我熱衷於將複雜的挑戰化繁為簡，設計出直觀又好用的解決方案。
						作為一名藥師，我擁有豐富的臨床醫學經驗。
						這些經驗使我能夠以獨特的視角切入問題，為軟體開發和醫療領域帶來創新的解決方案。無論面對何種挑戰，我都能夠運用跨領域知識，高效且創新地完成任務！
					</p>
				</div>
			</>
		),
	},
	technical: {
		display: true, // set to false to hide this section
		title: "Technical skills",
		skills: [
			{
				title: "AWS Solutions Architect Associate AWS 雲端架構師助理級認證",
				description: (
					<>
						取得 AWS Certified Cloud Practitioner 和 Solutions Architect
						Associate 認證
					</>
				),

				// optional: leave the array empty if you don't want to display images
				images: [],
			},
			{
				title:
					"使用：TypeScript, React, Vue, Python, PostgreSQL, MongoDB, Redis, Docker, Git, GitLab",
				description: <></>,
				// optional: leave the array empty if you don't want to display images
				images: [],
			},
		],
	},
	work: {
		display: true, // set to false to hide this section
		title: "Work Experience",
		experiences: [
			{
				company: "PUREALM",
				timeframe: "2022 - 2024",
				role: "Fullstack Engineer",
				achievements: [
					<>
						主要負責傢俱租賃購物系統前後端開發。 Primarily responsible for the
						front-end and back-end development of a furniture rental and
						shopping system
					</>,

					<>
						使用 TypeScript 和 NestJS 開發 API，整合資料庫與Redis快取提升速度。
						Developed APIs using TypeScript and NestJS, integrating databases
						and Redis caching to improve performance
					</>,

					<>
						利用 Docker 和 GitLab 建立 CI/CD 流程，加入單元測試和整合測試。
						Established CI/CD pipeline using Docker and GitLab, incorporating
						unit tests and integration tests
					</>,

					<>
						實現 Line Webhook 與 API 串聯，整合於 Line 聊天機器人。 Implemented
						Line Webhook and API integration, incorporating it into Line chatbot
					</>,

					<>
						使用 React 開發租賃與購物系統的前端和管理後台。與 Line bot
						登入串接，根據身份導流至相關服務。 Developed the front-end and admin
						dashboard of the rental and shopping system using React. Integrated
						Line bot login, directing users to relevant services based on their
						identity
					</>,

					<>
						參與需求分析、系統設計到實際部署的全過程，將複雜業務解耦為微服務，提高擴展性和可維護性。
						Participated in the entire process from requirement analysis and
						system design to actual deployment, decoupling complex business
						logic into microservices to improve scalability and maintainability
					</>,
				],
				images: [
					// optional: leave the array empty if you don't want to display images
					{
						src: "/images/projects/project-01/workDisplay01.jpg",
						alt: "demo01",
						width: 6,
						height: 12,
					},
					{
						src: "/images/projects/project-01/workDisplay02.jpg",
						alt: "demo01",
						width: 6,
						height: 12,
					},
					{
						src: "/images/projects/project-01/workDisplay03.jpg",
						alt: "demo01",
						width: 6,
						height: 12,
					},
					{
						src: "/images/projects/project-01/workDisplay04.jpg",
						alt: "demo01",
						width: 6,
						height: 12,
					},
					{
						src: "/images/projects/project-01/workDisplay05.jpg",
						alt: "demo01",
						width: 6,
						height: 12,
					},
					{
						src: "/images/projects/project-01/workDisplay06.jpg",
						alt: "demo01",
						width: 6,
						height: 12,
					},
				],
			},
			{
				company: "Teaching Hospital and pharmacies",
				timeframe: "2015 - current",
				role: "Pharmacist",
				achievements: [
					<>
						取得藥師執照後於教學醫院完成PGY訓練。 Completed post-graduate year
						training at teaching Hospital after obtaining pharmacist license
					</>,

					<>
						取得實習生指導藥師證照。 Obtained certification as a preceptor
						pharmacist for interns
					</>,

					<>
						藥學年會發表 ⸺ 提升藥學專業的傳統與現代化以滿⾜醫療的需求為主題。
						Presented at the 2017 Pharmacy Annual Conference on the topic of
						"Enhancing Pharmacy Profession: Tradition and Modernization to Meet
						Medical Needs"
					</>,

					<>
						參與長照安養中心電子病歷系統的導入。 Participated in the
						implementation of electronic medical record systems in long-term
						care facilities,
					</>,
				],
				images: [],
			},
		],
	},
	studies: {
		display: true, // set to false to hide this section
		title: "Studies",
		institutions: [
			{
				name: "National Central University",
				description: (
					<>
						Currently pursuing studies in computer science and information
						engineering In-service Master Program.
					</>
				),
			},
			{
				name: "Taipei Medical University ",
				description: <>Pharmacy</>,
			},
		],
	},

};

const blog = {
	label: "Blog",
	title: "Writing about design and tech...",
	description: `Read what ${person.name} has been up to recently`,
	// Create new blog posts by adding a new .mdx file to app/blog/posts
	// All posts will be listed on the /blog route
};

const work = {
	label: "My side projects",
	title: "My projects",
	description: `Design and dev projects by ${person.name}`,
	// Create new project pages by adding a new .mdx file to app/blog/posts
	// All projects will be listed on the /home and /work routes
};

const gallery = {
	label: "Gallery",
	title: "My photo gallery",
	description: `A photo collection by ${person.name}`,
	// Images from https://pexels.com
	images: [
		{
			src: "/images/projects/project-01/workDisplay06.jpg",
			alt: "demo01",
			orientation: "vertical",
		},
	],
};

export { person, social, newsletter, home, about, blog, work, gallery };
