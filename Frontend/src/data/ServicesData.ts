import { ServiceModel } from "../utils/Types";

const newLine = "</br></br>";

export const ServiceModels: ServiceModel[] = [
  {
    id: "web-app",
    title: "Vytvoření webové aplikace",
    order: 1,
    thumbnail: "web-application.webp",
    tags: [".NET", "MVC", "MSSQL", "React", "Git", "CI/CD"],
    description: `
<p>Nabízím tvorbu webových aplikací, které vám usnadní každodenní provoz a posunou vaše podnikání na novou úroveň. Každý projekt začíná pečlivým nasloucháním vašim požadavkům a návrhem řešení šitého na míru. Postarám se o to, aby aplikace nejen fungovala, ale byla také uživatelsky přívětivá a snadno se ovládala.</p>

<h3>Jak pracuji?</h3>
<p>Po schválení návrhu se pustím do vývoje s využitím moderních nástrojů a osvědčených technologií, jako je .NET ASP, MSSQL nebo React. Během vývoje můžete sledovat pokrok v testovacím prostředí a sdílet zpětnou vazbu, což zajišťuje, že finální produkt bude přesně odpovídat vašim představám.</p>

<h3>Výsledek?</h3>
<p>Profesionální aplikace, která vám usnadní práci, zefektivní procesy a zajistí spokojenost vašich zákazníků.</p>
`,
  },
  {
    id: "api",
    title: "Vývoj API",
    order: 2,
    thumbnail: "api.webp",
    tags: ["REST", "SOAP", "ASP.NET WEB API"],
    description:
      `<p>Potřebujete propojit vaše systémy, aplikace nebo služby? API (Application Programming Interface) je klíčem k efektivní výměně dat a komunikaci mezi různými platformami. Navrhnu pro vás řešení, které zjednoduší provoz, ušetří čas a umožní snadnou integraci s dalšími systémy.</p>

<h3>Jak pracuji?</h3>
<p>Vytvářím robustní a bezpečná API, která jsou přizpůsobena vašim potřebám. Bez ohledu na to, zda jde o propojení s mobilní aplikací, externími službami nebo interními systémy, dbám na jasnou strukturu a přehlednou dokumentaci. Při návrhu využívám moderní technologie, jako je ASP.NET Web API, a nabízím podporu pro standardy REST a SOAP.</p>

<h3>Výsledek?</h3>
<p>Spolehlivé a snadno použitelné API, které bez problémů zvládne každodenní provoz a umožní vám maximálně využít možnosti propojených systémů.</p>`,
  },
  {
    id: "hosting",
    title: "Hosting pro .NET aplikace",
    order: 3,
    thumbnail: "hosting.webp",
    tags: ["Azure App Service", "Windows Server", "IIS", "SSL"],
    description:
      `<p>Chcete mít jistotu, že vaše aplikace poběží spolehlivě a bezpečně? Nabízím hosting na míru, který zajistí hladký provoz vašich .NET aplikací. Nemusíte se starat o technické detaily – vše zařídím za vás. Od nasazení aplikace přes správu serveru až po zajištění bezpečnosti a výkonu, vašemu projektu věnuji maximální péči. Díky tomu se můžete plně soustředit na své podnikání a nechat starosti s provozem na mně.</p>

<h3>Co zahrnuje hosting?</h3>
<p>Postarám se o nastavení a správu serveru, včetně zabezpečení, pravidelných aktualizací a monitoringu. Zajistím také možnosti, jako je nastavení e-mailového serveru nebo vlastní domény s důvěryhodným SSL certifikátem. Hostování probíhá na virtuálních serverech s Windows Serverem, které poskytují stabilitu a výkon pro vaše aplikace.</p>

<h3>Technologie a flexibilita</h3>
<p>Pokud preferujete nasazení ve vlastním prostředí, mám zkušenosti s technologiemi, jako je Docker, Kubernetes, Azure App Service nebo IIS. Vaše aplikace bude vždy připravena běžet efektivně a bez komplikací.</p>`,
  },
];
