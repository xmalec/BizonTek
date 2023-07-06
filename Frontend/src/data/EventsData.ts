import { EventModel } from "../utils/Types";

const newLine = "</br></br>";

export const EventModels: EventModel[] = [
	{
		id: "bluesoft",
		title: "Bluesoft",
		tags: [".NET", "MVC", "Kentico", "CI/CD", "vue.js"],
		description: `Jako fullstack`,
		intro: `TODO`,
		images: [],
		date: new Date("2022-01-05"),
		dateString: "2022 - současnost"
	},
	{
		id: "optimal",
		title: "Optimal Program",
		tags: ["PHP", "Nette", "Optimal Program", "full-stack"],
		description: `Jako fullstack`,
		intro: `TODO`,
		images: [],
		date: new Date("2021-01-05"),
		dateString: "2021/2022"
	},
	{
		images: [],
		tags: ["JAVA", "Bakalářská práce", "Labyrinth Brno"],
		id: "labclub",
		title: "LabClub",
		dateString: "léto 2020",
		intro: `Labclub je můj první samostaný projekt, který je aktivně využíván do dnešního dne. Jedná se o webovou aplikaci spravující mimo-výukové aktivity soukromé školy Labyrinth v Brně. `,
		description: `Labclub je můj první samostaný projekt, který je aktivně využíván do dnešního dne. Jedná se o webovou aplikaci spravující mimo-výukové aktivity soukromé školy <b>Labyrinth</b> v Brně. Aplikace je napsána v programovacím jazyce <b>Java</b> s využitím frameworku <b>Spring</b>. Jako databázový systém jsem použil <b>MySQL</b>.${newLine}
		Aplikaci jsem vypracoval v rámci mé <b>bakalářské práce</b>. Závěrečná práce je k dispozici <a href="https://is.muni.cz/th/fo39c/" target="__blank">ZDE</a>.${newLine}
		Seznam hlavních případů užití:
		<ul>
			<li>
				Výpis a registrace kroužků
			</li>
			<li>
				Elektronické vyplnění přihlášky do družiny
			</li>
			<li>
				Rozřazení dětí do družin
			</li>
			<li>
				Správa příchodů a odchodů dětí ze školy
			</li>
			<li>
				Rozvrh aktivit jednotlivých dětí
			</li>
			<li>
				Nástěnka a seznam aktualit
			</li>
			<li>
				Omluvenky
			</li>
			<li>
				Možnost vytvoření více scénářů (rozšíření vzniklo v období koronakrize)
			</li>
		</ul>`,
		date: new Date("2020-07-21")
	},
	{
		images: [],
		tags: ["FI MUNI", "Bc."],
		id: "sbabr",
		title: "Bakalářský titul",
		dateString: "červen 2021",
		intro: "Získaný v oboru Aplikovaná informatika na Fakultě informatiky Masarykovi univerzity.",
		date: new Date("2021-06-27")
	},
	{
		images: [],
		tags: ["Zahraniční pobyt", "Ljubljana"],
		id: "sbabr",
		title: "Erasmus",
		dateString: "podzim 2020",
		intro: `V rámci programu Erasmus jsem jeden semestr studoval v hlavním městě Slovinska.`,
		description: `V rámci programu Erasmus jsem jeden semestr studoval v hlavním městě Slovinska.${newLine}
		Název fakulty: University of Ljubljana, Faculty of Computer and Information Science. ${newLine}
		V rámci výuky jsem prošel předměty pro datové zpracování textu, strojového zpracování obrazu, analýzu algoritmů a základy umělé inteligence. Vše probíhalo v angličtině.`,
		date: new Date("2021-06-27")
	},
	{
		images: [],
		tags: [".NET", "React", "Labyrinth Brno"],
		id: "labnet",
		title: "LabNet",
		dateString: "léto 2023",
		intro: `TODO`,
		description: `TODO`,
		date: new Date("2023-08-30")
	},
	{
		images: [],
		tags: [".NET", "React", "Labyrinth Brno"],
		id: "labnet",
		title: "IT Partner ve společnosti Bosch Diesel",
		dateString: "2018 - 2020",
		intro: `TODO`,
		description: `TODO`,
		date: new Date("2018-08-30")
	}
	// {
	// 	images: [],
	// 	tags: ["FI MUNI", "Ing."],
	// 	id: "ING",
	// 	title: "Inženýrský titul",
	// 	dateString: "únor 2024",
	// 	intro: "Získaný v oboru Softwarové inženýrství na Fakultě informatiky Masarykovi univerzity.",
	// 	date: new Date("2024-02-10")
	// }
];
