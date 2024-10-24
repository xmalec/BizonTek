import { ServiceModel } from "../utils/Types";

const newLine = "</br></br>";

export const ServiceModels: ServiceModel[] = [
  {
    id: "web-app",
    title: "Webové aplikace",
    order: 1,
    thumbnail: "web-application.webp",
    tags: [".NET", "MVC", "MSSQL", "React", "Git", "CI/CD"],
    description: `Jako fullstack vývojář se specializuji na vývoj webových aplikací, které jsou šité na míru potřebám mých klientů. Při spolupráci dbám na kvalitní a rychlou podporu.${newLine}
        Zahájení projektu doprovází návrh aplikace a zaznamenání zadání pomocí <b>UML</b> (Unified Modeling Language). Následně se navrhne design aplikace. Po zpracování všech připomínek se začne se samotným vývojem. Během vývoje se může vytvořit testovací prostředí (tzv. <b>UAT</b>), pomoci kterého klient získá přehled o aktuálním stavu aplikace a případně se může podílet na testování jednotlivých částí aplikace.
        <h3>Technologie</h3>
        <ul>
        <li>
        Jednou z mých specializací je vývoj pomocí pomocí <b>.NET MVC</b>, který poskytuje výkonnou a flexibilní platformu pro tvorbu moderních webových aplikací.</li>
        <li>Pro ukládání dat pak používám relační databázi <b>MSSQL</b>, která je jedním z předních řešení pro správu a manipulaci s daty.</li>
        <li>Během vývoje uživatelem viditelné části aplikace (tzv. frontend) se spoléhám na technologie Razor Pages, TypeScript, Next.js, Vue.js, SASS a mnoho dalších.</li>
        <li>Při vývoji pracuji s verzovacím systémem <b>GIT</b>. Nasazování a testování je plně zautomatizováno v rámci <b>CI/CD</b> (continuous integration and continuous delivery) procesů.</li>
        </ul>`,
  },
  // {
  //   id: "cms",
  //   title: "Systémy pro správu obsahu (CMS)",
  //   order: 2,
  //   thumbnail: "cms.webp",
  //   description:
  //     "Poskytuji vývoj a implementaci robustních správců obsahu (CMS), které umožňují snadné a intuitivní spravování obsahu na webových stránkách. Díky CMS můžete aktualizovat texty, obrázky, videa a další prvky na svých stránkách bez nutnosti technických znalostí. Snažím se vytvořit uživatelsky příjemné a přizpůsobitelné CMS, které odpovídají specifickým potřebám a vizuálnímu stylu každého klienta.",
  // },
  {
    id: "api",
    title: "Vývoj API",
    order: 2,
    thumbnail: "api.webp",
    tags: ["REST", "SOAP", "ASP.NET WEB API"],
    description:
      "API (rozhraní pro programování aplikací) umožňuje propojení vaší webové aplikace s dalšími systémy a službami. Navrhuji a implementuji robustní a bezpečné API, které umožňuje výměnu dat a integraci s externími platformami. Bez ohledu na to, zda potřebujete API pro mobilní aplikace, třetí strany nebo interní komunikaci mezi různými částmi vašeho systému, jsem schopen vytvořit efektivní a dobře zdokumentované rozhraní.",
  },
  {
    id: "hosting",
    title: "Spolehlivý hosting",
    order: 3,
    thumbnail: "hosting.webp",
    tags: ["VPS", "Docker", "Azure", "Windows Server", "IIS"],
    description:
      `V rámci společné spolupráce nabízím i hostování vašich aplikací. Postarám se o všechny záležistosti spojené se zabezpečeným a spolehlivých provozem systému. Součástí správy je i možnost nastavení e-mailového serveru nebo zajištění vlastní domény s důvěryhodným SSL certifikátem.${newLine}Pro hostování webových aplikací používám <b>virtuální servery</b> s operačním systémem <b>Windows Server</b>.${newLine}Pokud máte zájem o nasazení své aplikace ve vlastním prostředí, technologie jako <b>Docker</b>, <b>Kubernetes</b>, <b>App Service od Azure</b> nebo <b>IIS</b> (Internet Information Services) jsou mi dobře známé.`,
  },
  // {
  //   id: "reservation-systems",
  //   title: "Systémy pro rezervace a objednávky",
  //   order: 3,
  //   thumbnail: "reservation-system.webp",
  //   description:
  //     "Poskytuji vývoj rezervačních systémů, které umožňují jednoduchou a efektivní správu rezervací, časových plánů a kalendářů. Bez ohledu na to, zda potřebujete rezervační systém pro sportovní střediska, restaurace, salony nebo jiné služby, mohu vám pomoci vytvořit intuitivní a spolehlivé řešení. Snažím se zajistit, aby rezervační systém byl snadno použitelný pro vaše zákazníky a zároveň poskytoval vám veškerou potřebnou funkcionalitu pro řízení rezervací a správu času.",
  // },
  {
    id: "mobile-app",
    title: "Mobilní aplikace",
    order: 4,
    thumbnail: "mobile.webp",
    tags: ["Flutter", "Xamarin", "PWA"],
    description: `Vytvářím přizpůsobené mobilní aplikace pro platformy Android a iOS. Mám zkušenosti s vývojem nativních aplikací, které poskytují vysokou výkonnost a optimalizovanou uživatelskou zkušenost. Snažím se porozumět vašim potřebám a cílům a navrhnout a vyvinout mobilní aplikaci, která přesně odpovídá vašim požadavkům a představám.${newLine}
        K vývoji mobilních aplikací využívám frameworků <b>Flutter, Xamarin</b> nebo technologii <b>Progressive Web App.</b>`,
  },
  {
    id: "ecommerce",
    title: "E-commerce weby",
    order: 5,
    thumbnail: "e-commerce.webp",
    tags: ["E-shopy", "Platební brána", "GA4", "Integrace CRM", "XML feedy"],
    description: `Mám zkušenosti s vývojem a implementací robustních e-commerce platforem. Pomáhám vytvářet <b>e-shopy</b>, které nabízejí snadný a bezpečný nákupní proces, efektivní správu produktů a zákazníků, <b>platební brány</b>, intergrace s <b>CRM</b> systémem, export <b>XML feedů</b>, rychlé a pohodlné <b>full-textové vyhledávání</b> produktů, monitorovací nástroje typu <b>Google Analytics</b> a další důležité funkce.`,
  },
];
