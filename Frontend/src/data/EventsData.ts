import { EventModel } from "../utils/Types";

const newLine = "</br></br>";

export const EventModels: EventModel[] = [
	{
		id: "web-app",
		title: "Webové aplikace",
		tags: [".NET", "MVC", "MSSQL", "React", "Git", "CI/CD"],
		description: `Jako fullstack`,
		intro: `aa`,
		images: [],
		date: new Date("2024-07-21")
	},
	{
		images: [],
		tags: ["JAVA", "SBAPR"],
		id: "1",
		title: "LabClub",
		dateString: "léto 2020",
		intro: "Labclub je mým prvním projektem, který je nyní stále aktivní. Projekt jsem vypracoval v rámci bakalářské práce mého studia na fakultě informatiky.",
		description: ``,
		date: new Date("2020-07-21")
	},
	{
		images: [],
		tags: ["FI Muni", "Bc."],
		id: "1",
		title: "Bakalářský titul",
		dateString: "léto 2020",
		intro: "Labclub je mým prvním projektem, který je nyní stále aktivní. Projekt jsem vypracoval v rámci bakalářské práce mého studia na fakultě informatiky.",
		date: new Date("2020-07-21")
	}
];
