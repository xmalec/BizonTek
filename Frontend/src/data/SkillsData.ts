import { SkillModel } from "../utils/Types";

const newLine = "</br></br>";

export const SkillsData: SkillModel[] = [
  // Backend Technologies
  {
    id: "asp-net",
    name: "ASP.NET",
    level: 10,
    order: 1,
    type: "back-end",
  },
  {
    id: "csharp",
    name: "C#",
    level: 10,
    order: 2,
    type: "back-end",
  },
  {
    id: "sql",
    name: "SQL (MS SQL, MySQL)",
    level: 10,
    order: 3,
    type: "back-end",
  },
  {
    id: "restful-api",
    name: "RESTful API",
    level: 10,
    order: 4,
    type: "back-end",
    description: "ASP.NET Web API, Swagger"
  },
  {
    id: "microsoft-azure",
    name: "Microsoft Azure",
    level: 8,
    order: 5,
    type: "back-end",
    description: "Azure Functions, Azure Storage, App Service, App Insights, Key Vault, Front Door"
  },
  {
    id: "devops",
    name: "DevOps",
    level: 8,
    order: 6,
    type: "back-end",
    description: "Terraform, ARM Bicep, GitHub Actions, GitLab CI/CD"
  },
  {
    id: "iis",
    name: "IIS",
    level: 8,
    order: 7,
    type: "back-end",
    description: "Hosting webových aplikací"
  },
  {
    id: "redis",
    name: "Redis",
    level: 9,
    order: 8,
    type: "back-end",
    description: "Distribuovaná cache"
  },
  {
    id: "azure-cognitive-search",
    name: "Vyhledávací enginy",
    level: 8,
    order: 9,
    type: "back-end",
    description: "Azure Cognitive Search, ElasticSearch, Lucene"
  },
  {
    id: "kentico-cms",
    name: "Kentico CMS",
    level: 10,
    order: 10,
    type: "back-end",
    description: "Kentico Xperience, Xperience by Kentico, Kontent AI"
  },
  {
    id: "saml",
    name: "SAML",
    level: 7,
    order: 12,
    type: "back-end",
    description: "SSO integrace"
  },
  {
    id: "git",
    name: "Git",
    level: 9,
    order: 13,
    type: "back-end",
  },
  {
    id: "spring-framework",
    name: "Spring Framework",
    level: 7,
    order: 15,
    type: "back-end",
    description: "Java, Spring Boot"
  },
  {
    id: "nette-framework",
    name: "Nette Framework",
    level: 8,
    order: 17,
    type: "back-end",
    description: "PHP"
  },

  // Frontend Technologies
  {
    id: "react",
    name: "React",
    level: 6,
    order: 18,
    type: "front-end",
  },
  {
    id: "typescript",
    name: "TypeScript",
    level: 8,
    order: 19,
    type: "front-end",
  },
  {
    id: "webpack",
    name: "Webpack",
    level: 7,
    order: 20,
    type: "front-end",
  },
  {
    id: "gulp",
    name: "Gulp",
    level: 8,
    order: 21,
    type: "front-end",
  },
  {
    id: "bootstrap",
    name: "Bootstrap",
    level: 8,
    order: 22,
    type: "front-end",
  },
  {
    id: "css",
    name: "CSS",
    level: 7,
    order: 23,
    type: "front-end",
    description: "Práce s preprocesory SASS a LESS."
  },
  {
    id: "html",
    name: "HTML",
    level: 9,
    order: 24,
    type: "front-end",
  },
  {
    id: "seo",
    name: "SEO optimalizace",
    level: 7,
    order: 25,
    description: "Google Search Console, LightHouse",
    type: "front-end"
  },
  {
    id: "google-analytics",
    name: "Google Analytics",
    level: 7,
    order: 27,
    type: "other",
    description: "GA4, Data layers"
},
  // Other Skills
  {
    id: "english",
    name: "Angličtina",
    level: 8,
    order: 26,
    type: "other",
    description: "B2 First (FCE) certifikát"
  },

];
