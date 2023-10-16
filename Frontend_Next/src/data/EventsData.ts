import { EventModel } from "../utils/Types";

const newLine = "</br></br>";
const labclubFolder = "./img/events/labclub";

export const EventModels: EventModel[] = [
  {
    id: "bluesoft",
    title: "Bluesoft",
    tags: [".NET", "MVC", "Kentico", "CI/CD", "vue.js"],
    description: `V této firmě v současnosti pracuji jako <b>backend vývojář</b> na částečný úvazek. Během studia jsem zde absolvoval prácovní stáž.   ${newLine}
		<b>Bluesoft</b> je středně velká společnost, která dodává projekty postavené kolem produktu <b>Kentico</b>, 
		které se řadí mezi přední DXP (digital experience platform) na trhu. ${newLine}
		Při vývoji se setkám s technologiemi <b>.NET MVC, MSSQL, LINQ, Razor Pages</b>. Do projektu často integrujeme služby od <b>Azure</b> nebo <b>Google Analytics</b> Pro řízení a správu projektů pracujeme s nástrojem <b>Jira</b>.${newLine}
		Mezi přední klienty firmy Blusoft se řadí společnosti SAZKA a.s., E.ON, ORLEN Benzina a další.
		Já jsem se osobně podílel na projektech:
		<ul>
		<li><a href="https://louda.skoda-auto.cz/" target="_blank">Škoda Dealers</a></li>
		<li><a href="https://skoda-kariera.cz/" target="_blank">Škoda Kariéra</a></li>
		<li><a href="https://www.skoda-kariera.cz/edu" target="_blank">Škoda Edu</a></li>
		<li><a href="https://emobilita.skoda-auto.cz/" target="_blank">Škoda e-Mobilita</a></li>
		<li>B2B objednávkový portál pro <a href="http://onecarlsbergpos.com/" target="_blank">Carlsberg</a> a <a href="http://brand-marketplace.com/" target="_blank">Asahi</a></li>
		</ul>
		Odkaz na <a href="https://www.bluesoft.cz/" target="_blank">webové stránky</a>`,
    //images: ["/img/events/bluesoft/logo.webp"],
    date: new Date("2022-01-05"),
    dateString: "2022 - současnost",
  },
  {
    id: "optimal",
    title: "Optimal Program",
    tags: ["PHP", "Nette", "Optimal Program", "Full stack"],
    //images: ["/img/events/optimal/logo.svg"],
    description: `V této firmě jsem měl příležitost pracovat na široké škále komplexních a rozmanitých projektů, které se odehrávaly v rámci malého, týmového prostředí. Jako <b>full stack</b> vývojář jsem byl plně zapojen do všech klíčových fází projektů, ať už se jednalo o sběr požadavků, návrh, implementaci, testování, nasazení či údržbu.
		${newLine}
		Hlavní zaměření spočívalo ve webových aplikacích. Spolupracoval jsem na vývoji informačních systémů, rezervačních platforem, redakčních systémů, e-shopů a také aplikací určených pro elektronické testování. Tato široká paleta projektů mi především umožnila rozvinout své dovednosti v oblasti návrhu řešení pro různorodé byznysy a získat přehled o různých oblastech webového vývoje.
		${newLine}
		Naše primární programovací platforma byla <b>PHP</b>, přičemž jsme využívali český <b>Nette framework</b>.
		${newLine}Odkaz na <a href="http://www.optimal-program.cz" target="_blank">webové stránky</a>`,
    date: new Date("2021-01-05"),
    dateString: "2021/2022",
  },
  {
    images: [],
    tags: [".NET", "React", "Labyrinth Brno", "Azure Cognitive Search"],
    id: "labnet",
    title: "LabNet",
    dateString: "léto 2023",
    description: `
  	Labnet představuje druhou aplikaci, kterou jsem vytvořil pro soukromou školu <b>Labyrinth</b>. Tato aplikace slouží jako rodičovský portál a jako nástěnka, kde rodiče a přátelé školy mohou nabízet nebo naopak poptávat různé služby.
  	${newLine}Pro implementaci této aplikace jsem využil <b>API</b> napsané v <b>ASP.NET</b>, zatímco frontend byl postaven na platformě <b>React</b>. Pro splnění požadavků na rychlé a přesné fulltextové vyhledávání byla v aplikaci integrována služba <b>Azure Cognitive Search</b>.
  	${newLine} Design aplikace byl navrhnut <a href="https://bronislavmusil.com/cs" target="_blank">Bronislavem Musilem</a>`,
    date: new Date("2023-08-30"),
  },
  {
    images: [`${labclubFolder}/labclub2.png`],
    tags: ["JAVA", "Bakalářská práce", "Labyrinth Brno"],
    id: "labclub",
    title: "LabClub",
    dateString: "léto 2020",
    description: `Labclub je můj první samostaný ostrý projekt a je ativně využíván do dnešního dne. Jedná se o webovou aplikaci spravující mimo-výukové aktivity soukromé školy <b>Labyrinth</b> v Brně. Aplikace je napsána v programovacím jazyce <b>Java</b> s využitím frameworku <b>Spring</b>. Jako databázový systém jsem použil <b>MySQL</b>.${newLine}
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
    date: new Date("2020-07-21"),
  },
  {
    images: [],
    tags: ["FI MUNI", "Bc."],
    id: "sbabr",
    title: "Bakalářský titul",
    dateString: "červen 2021",
    description: `Získaný v oboru Aplikovaná informatika na Fakultě informatiky Masarykovi univerzity. ${newLine}
		V rámci studia jsem úspěšně absolvoval předměty specializující se:
		<ul>
		<li>Programováním: Python, C, C++, C#, Java, Prolog, Haskel</li>
		<li>Návrhovými vzory aplikace, UML</li>
		<li>Databázovými systémy: Dotazy, příkazy, joiny, agregační funkce</li>
		<li>Operačními systémy: Správa systémů MS Windows, Unix</li>
		<li>Algoritmizací: Řadící a prohledávací algoritmy, automaty a gramatiky, vyčíslitelnost a složitost</li>
		<li>Základy umělé inteligence</li>
		<li>Základy počítačových sítí</li>
		</ul>`,
    date: new Date("2021-06-27"),
  },
  {
    images: [],
    tags: ["Zahraniční pobyt", "Erasmus", "Ljubljana"],
    id: "sbabr",
    title: "Studijní pobyt v zahraničí",
    dateString: "podzim 2020",
    description: `
		V rámci účasti v programu <b>Erasmus</b> jsem strávil jeden semestr studiem v hlavním městě Slovinska. Byl jsem zapsán na <b>University of Ljubljana, Faculty of Computer and Information Science</b>.${newLine} Během tohoto semestru jsem absolvoval předměty, které se zaměřovaly na oblasti jako datová analýza, zpracování obrazu pomocí strojového učení, analýza algoritmů a základy umělé inteligence.`,
    date: new Date("2020-11-15"),
  },
  {
    images: [],
    tags: ["VBA", "Microsoft Excel", "Bosch Diesel Jihlava"],
    id: "bosch",
    title: "IT Partner ve společnosti Bosch",
    dateString: "2018 - 2020",
    description: `
		Během mé první pracovní stáže v oblasti informačních technologií jsem působil jako IT Partner ve Facility Management oddělení společnosti <b>Bosch Diesel</b> v Jihlavě.${newLine}Mým úkolem bylo zajistit hladký chod informačních systémů v kanceláři. Vytvářel jsem a spravoval tickety pro správné přiřazení rolí pro kolegy a instalaci potřebných programů. Dále jsem zajišťoval správnou integraci jednotlivých procedur různých informačních politik firmy. Spravoval jsem IT vybavení a zodpovídal jsem za jeho pravidelnou výměnu. Také jsem implementoval různé <b>VBA makra</b> k optimalizaci procesů v kanceláři. Tato pozice mi umožnila získat hlubší povědomí o fungování oddělení v rámci většího podniku.`,
    date: new Date("2018-08-30"),
  },
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
