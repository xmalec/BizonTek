import { ServiceModel } from "../utils/Types";

const newLine = "</br></br>";

export const ServiceModels: ServiceModel[] = [
	{
		id: "web-app",
		title: "Webové aplikace",
		order: 0,
		thumbnail: "web-application.png",
		tags: [".NET", "MVC", "MSSQL", "React", "Git", "CI/CD"],
		description: `Jako fullstack developer se specializuji na vývoj webových aplikací, které jsou šité na míru potřebám mých klientů.${newLine}
        Zahájení projektu doprovází návrh aplikace a zaznamenání zadání pomocí <b>UML</b> (Unified Modeling Language). Následně se navrhne design aplikace. Po zpracování všech připomínek se začne se samotným vývojem. Během vývoje se může vytvořit testovací prostředí (tzv. <b>UAT</b>), pomoci kterého klient získá přehled o aktuálním stavu aplikace a případně se může podílet na testování jednotlivých částí aplikace.
        <h3>Technologie</h3>
        <ul>
        <li>
        Jednou z mých specializací je vývoj pomocí pomocí <b>.NET MVC</b>, který poskytuje výkonnou a flexibilní platformu pro tvorbu moderních webových aplikací.</li>
        <li>Pro ukládání dat pak používám relační databázi <b>MSSQL</b>, která je jedním z předních řešení pro správu a manipulaci s daty.</li>
        <li>Během vývoje uživatelem viditelné části aplikace (tzv. frontend) se spoléhám na technologie Razor Pages, TypeScript, React, VUE.js, SASS a mnoho dalších.</li>
        <li>Při vývoji pracuji s verzovacím systémem <b>GIT</b>. Nasazování a testování je plně zautomatizováno v rámci <b>CI/CD</b> (continuous integration and continuous delivery) procesů.</li>
        </ul>`,
	},
	{
		id: "ecommerce",
		title: "E-commerce weby (CRM)",
		order: 1,
		thumbnail: "ecommerce.jpg",
		tags: ["E-shopy", "Platební brána", "GA4"],
		description: `Mám zkušenosti s vývojem a implementací robustních e-commerce platforem. Pomáhám klientům vytvářet <b>e-shopy</b>, které nabízejí snadný a bezpečný nákupní proces, efektivní správu produktů, platební brány a další důležité funkce. Snažím se vytvářet přehledné a atraktivní e-commerce prostředí, které maximalizuje konverzi a zároveň poskytuje uživatelům pohodlný zážitek při nakupování. Samozřejmostí je tedy zajištení nízkého času načtení stránky stejně tak jako rychle a přehledné vyhledávání.${newLine}
        Integrace <b>Google Analytics</b> do systému zpřístupní pokročilé monitorovací nástroje. S využitím Google Analytics mohu pomoci klientům porozumět chování svých uživatelů a získat cenné poznatky o tom, jak lidé interagují s jejich e-commerce platformou. Tato data mohou být využita k optimalizaci uživatelského rozhraní, personalizaci obsahu, sledování výkonu kampaní a identifikaci oblastí, které vyžadují zlepšení.`,
	},
	{
		id: "cms",
		title: "Systémy pro správu obsahu (CMS)",
		order: 2,
		thumbnail: "cms.png",
		description:
			"Poskytuji vývoj a implementaci robustních správců obsahu (CMS), které umožňují snadné a intuitivní spravování obsahu na webových stránkách. Díky CMS můžete aktualizovat texty, obrázky, videa a další prvky na svých stránkách bez nutnosti technických znalostí. Snažím se vytvořit uživatelsky příjemné a přizpůsobitelné CMS, které odpovídají specifickým potřebám a vizuálnímu stylu každého klienta.",
	},
	{
		id: "api",
		title: "Vývoj API",
		order: 4,
		thumbnail: "api.png",
		description:
			"API (rozhraní pro programování aplikací) umožňuje propojení vaší webové aplikace s dalšími systémy a službami. Navrhuji a implementuji robustní a bezpečné API, které umožňuje výměnu dat a integraci s externími platformami. Bez ohledu na to, zda potřebujete API pro mobilní aplikace, třetí strany nebo interní komunikaci mezi různými částmi vašeho systému, jsem schopen vytvořit efektivní a dobře zdokumentované rozhraní.",
	},
	{
		id: "reservation-systems",
		title: "Systémy pro rezervace a objednávky",
		order: 3,
		thumbnail: "reservation-system.png",
		description:
			"Poskytuji vývoj rezervačních systémů, které umožňují jednoduchou a efektivní správu rezervací, časových plánů a kalendářů. Bez ohledu na to, zda potřebujete rezervační systém pro sportovní střediska, restaurace, salony nebo jiné služby, mohu vám pomoci vytvořit intuitivní a spolehlivé řešení. Snažím se zajistit, aby rezervační systém byl snadno použitelný pro vaše zákazníky a zároveň poskytoval vám veškerou potřebnou funkcionalitu pro řízení rezervací a správu času.",
	},
	{
		id: "mobile-app",
		title: "Mobilní aplikace",
		order: 5,
		thumbnail: "mobile.jpg",
		tags: ["Flutter", "Xamarin", "PWA"],
		description: `Vytvářím přizpůsobené mobilní aplikace pro platformy Android a iOS. Mám zkušenosti s vývojem nativních aplikací, které poskytují vysokou výkonnost a optimalizovanou uživatelskou zkušenost. Snažím se porozumět vašim potřebám a cílům a navrhnout a vyvinout mobilní aplikaci, která přesně odpovídá vašim požadavkům a představám.${newLine}
        K vývoji mobilních aplikací využívám frameworků <b>Flutter, Xamarin</b> nebo technologii <b>Progressive Web App.</b>`,
	},
	{
		id: "hosting",
		title: "Spolehlivý hosting",
		order: 6,
		thumbnail: "hosting.png",
		tags: ["VPS", "Docker", "Azure", "Windows Server", "IIS"],
		description:
			"Pro hostování webových aplikací používám <b>Linuxový VPS</b> (Virtual Private Server), který mi umožňuje mít plnou kontrolu nad konfigurací a správou serveru. Pro izolaci aplikací využívám Docker kontejnerů, což mi umožňuje jednoduchou správu a nasazení aplikací. </br></br> Pokud máte zájem o nasazení své aplikace ve vlastním prostředí, například pomocí Dockeru, Kubernetes, App Service od Azure nebo <b>IIS</b> (Internet Information Services), mohu se o to také postarat. Nastavení a konfigurace těchto prostředí jsou mi dobře známé, a proto vám mohu pomoci s nasazením vaší aplikace do vybraného prostředí a zajistit, aby vše fungovalo hladce.",
	},
];
