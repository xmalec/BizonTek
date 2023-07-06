import { EventModel } from "../utils/Types";

const newLine = "</br></br>";
const labclubFolder = "/events/labclub";

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
		tags: ["PHP", "Nette", "Optimal Program", "Full stack"],
		description: `Během této cenné zkušenosti jsem měl skvělou příležitost pracovat na široké škále komplexních a rozmanitých projektů, které se odehrávaly v rámci malého, týmového prostředí. Jako <b>full stack</b> vývojář jsem byl plně zapojen do všech klíčových fází projektů, ať už se jednalo o sběr požadavků, návrh, implementaci, testování, nasazení či údržbu.
		${newLine}
		Naše hlavní zaměření spočívalo výhradně v webových aplikacích, které byly nesmírně různorodé. Spolupracoval jsem na vývoji informačních systémů, rezervačních platforem, redakčních systémů, e-shopů a také aplikací určených pro elektronické testování. Tato široká paleta projektů mi umožnila rozvinout své dovednosti a získat přehled o různých oblastech webového vývoje.
		${newLine}
		Naše primární programovací platforma byla <b>PHP</b>, přičemž jsme využívali český <b>Nette framework</b>, který se ukázal jako skvělý nástroj pro efektivní a bezpečný vývoj.
		${newLine}Odkaz na <a href="http://www.optimal-program.cz" target="_blank">webové stránky</a>`,
		intro: `Během této cenné zkušenosti jsem měl skvělou příležitost pracovat na široké škále komplexních a rozmanitých projektů, které se odehrávaly v rámci malého, týmového prostředí.`,
		images: [],
		date: new Date("2021-01-05"),
		dateString: "2021/2022"
	},
	{
		images: [],
		tags: [".NET", "React", "Labyrinth Brno", "Azure Cognitive Search"],
		id: "labnet",
		title: "LabNet",
		dateString: "léto 2023",
		intro: `TODO`,
		description: `
		Labnet představuje druhou aplikaci, kterou jsem vytvořil pro soukromou školu <b>Labyrinth</b>. Tato aplikace slouží jako rodičovský portál a funguje jako nástěnka, kde rodiče a přátelé školy mohou nabízet nebo hledat různé služby.
		${newLine}Pro implementaci této aplikace jsem využil <b>API</b> napsané v <b>.NET frameworku</b>, zatímco frontend byl postaven na platformě <b>React</b>. Pro splnění požadavků na rychlé a přesné fulltextové vyhledávání byla v aplikaci integrována služba <b>Azure Cognitive Search</b>.
		${newLine} Design aplikace byl kompletně navrhnut <a href="https://bronislavmusil.com/cs" target="_blank">Bronislavem Musilem</a>`,
		date: new Date("2023-08-30")
	},
	{
		images: [`${labclubFolder}/labclub`],
		tags: ["JAVA", "Bakalářská práce", "Labyrinth Brno"],
		id: "labclub",
		title: "LabClub",
		dateString: "léto 2020",
		intro: `Labclub je můj první samostaný projekt, který je aktivně využíván do dnešního dne. Jedná se o webovou aplikaci spravující mimo-výukové aktivity soukromé školy Labyrinth v Brně. `,
		description: `Labclub je můj první samostaný projekt, který je aktivně využíván do dnešního dne. Jedná se o webovou aplikaci spravující mimo-výukové aktivity soukromé školy <b>Labyrinth</b> v Brně. Aplikace je napsána v programovacím jazyce <b>Java</b> s využitím frameworku <b>Spring</b>. Jako databázový systém jsem použil <b>MySQL</b>.${newLine}
		Aplikaci jsem vypracoval v rámci <b>bakalářské práce</b>. Závěrečná práce je k dispozici <a href="https://is.muni.cz/th/fo39c/" target="__blank">ZDE</a>.${newLine}
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
		description: `Získaný v oboru Aplikovaná informatika na Fakultě informatiky Masarykovi univerzity. ${newLine}
		V rámci studia jsem absolvoval předměty zabívající se:
		<ul>
		<li>Programování: Python, C, C++, C#, Java, Prolog, Haskel</li>
		<li>Návrhové vzory aplikace, UML</li>
		<li>Databázové systémy: Dotazy, příkazy, joiny, agregační funkce</li>
		<li>Operační systémy: Správa systémů MS Windows, Unix</li>
		<li>Algoritmizace: Řadící a prohledávací algoritmy, automaty a gramatiky, vyčíslitelnost a složitost</li>
		<li>Základy umělé inteligence</li>
		<li>Základy počítačových sítí</li>
		<li>Technická znalost počítačové techniky</li>
		</ul>`,
		date: new Date("2021-06-27")
	},
	{
		images: [],
		tags: ["Zahraniční pobyt", "Ljubljana"],
		id: "sbabr",
		title: "Erasmus",
		dateString: "podzim 2020",
		intro: `V rámci mé účasti v programu Erasmus jsem strávil jeden semestr studiem v hlavním městě Slovinska.`,
		description: `
		V rámci mé účasti v programu Erasmus jsem strávil jeden semestr studiem v hlavním městě Slovinska. Byl jsem zapsán na <b>University of Ljubljana, Faculty of Computer and Information Science</b>.${newLine} Během tohoto semestru jsem se věnoval různým předmětům, které se zaměřovaly na oblasti jako datová analýza, zpracování obrazu pomocí strojového učení, analýza algoritmů a základy umělé inteligence. Veškerá výuka probíhala v <b>angličtině</b>.`,
		date: new Date("2020-11-15")
	},
	{
		images: [],
		tags: ["VBA", "Microsoft Excel", "Bosch Diesel Jihlava"],
		id: "bosch",
		title: "IT Partner ve společnosti Bosch",
		dateString: "2018 - 2020",
		intro: `Během mé první pracovní stáže v oblasti informačních technologií jsem působil jako IT Partner ve Facility Management oddělení společnosti <b>Bosch Diesel</b> v Jihlavě.`,
		description: `
		Během mé první pracovní stáže v oblasti informačních technologií jsem působil jako IT Partner ve Facility Management oddělení společnosti <b>Bosch Diesel</b> v Jihlavě.${newLine}Mým úkolem bylo zajistit správné přiřazení rolí a přístupů pro kolegy, spravovat IT vybavení a implementovat různé <b>VBA makra</b> k optimalizaci procesů. Tato pozice mi umožnila získat hlubší povědomí o fungování oddělení v rámci většího podniku.`,
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
