const header = {
  // all the properties are optional - can be left empty or deleted
  homepage: 'https://www.exploradome.fr/',
  title: 'Exploradôme',
}

const about = {
  // all the properties are optional - can be left empty or deleted
  name: 'Atelier Exploraclub 2025',
  role: 'Initiation à la création d\'une page Web',
  // short description can be used as subtitle
description: (
    <>
      Dans le cadre des ateliers Exploraclub, nos informaticien·nes en herbe ont eu trois mois pour s&apos;initier à l&apos;apprentissage des mécaniques d&apos;internet. <br />
      Au programme : design WEB, prise en main des outils de développement, et programmation en <b>HTML/CSS</b>.
    </>
  )  // resume: 'https://example.com',
  // social: {
  //   linkedin: 'https://linkedin.com',
  //   github: 'https://github.com/JawedBS',
  // },
}

const projects = [
  // projects can be added an removed
  // if there are no projects, Projects section won't show up
  // if you want to add a project, follow the format below
  {
    name: 'Aninfo',
    description:
  " Le site d'Anis s'inspire des nouveaux médias présents sur les réseaux sociaux afin d'informer les visiteurs, notamment en matière de sécurité.  ",
    stack: ['Information','Journal','Sécurité'],
    sourceCode: 'https://github.com/JawedBS/OhMyFood.git',
    livePreview: 'https://ohmyfood-jbs.netlify.app/', 
  },
  {
    name: '✨ Mon Blog sur l\'Univers!!!✨ ',
    description:
    "Charafeddine nous ouvre les portes de son blog pour en apprendre un peu plus sur l'histoire de notre système solaire.",
    stack: ['Blog', 'Espace', 'Science'],
    sourceCode: 'https://github.com/JawedBS/Nina-Carducci.git',
    livePreview: 'https://nina-carducci-jbs.netlify.app/',
  },
  {
  name: 'Gamer Sensations',
  description:
  "Avez-vous l'esprit Gamer ? Hugo oui ! Besoin d'une bonne playlist ou d'une recommandation Jeux-Vidéos ? Hugo saura vous conseiller 😉 ",
  stack: ['Jeux-vidéo', 'Roblox', 'Blog'],
  sourceCode: 'https://github.com/JawedBS/Printit.git',
  livePreview: 'https://jawedbs.github.io/Printit/',
},
{
  name: 'BS CODIUM',
  description:
  (<>Ibrahim  est un expert de BrawlStar et vous propose des tutoriels <i>pour avoir la meilleure Méta</i> de tous les gamers</>),
  stack: ['Jeux-vidéo', 'BrawlStar', 'Tutoriel'],
  sourceCode: 'https://github.com/JawedBS/Printit.git',
  livePreview: 'https://dynamic-mochi-540184.netlify.app/',
},
{
  name: 'Liste de personnages de mangas',
  description:
  "Louis a répertorié pour vous un grand nombre de personnages des Shonens les plus marquants du millénaire",
  stack: ['Wiki', 'Blog','Manga'],
  sourceCode: 'https://github.com/JawedBS/Printit.git',
  livePreview: 'https://dynamic-mochi-540184.netlify.app/',
},
{
  name: 'Les jeux pour protéger la planète',
  description:
  "Notre experte en environnment Maelys cherche à nous sensibiliser à travers une liste de jeux vidéos sur la nature et l'environnement",
  stack: ['Jeux-vidéo', 'Blog', 'Wiki'],
  sourceCode: 'https://github.com/JawedBS/Printit.git',
  livePreview: 'https://dynamic-mochi-540184.netlify.app/',
},
{
  name: 'Les petits mangas de SOSO',
  description:
  "Solal vous propose un top des meilleurs mangas. En prime, vous pourrez découvrir les OAV de Naruto, One Piece ou Spy X Family",
  stack: ['Blog','Manga','Musique'],
  sourceCode: 'https://github.com/JawedBS/Printit.git',
  livePreview: 'https://dynamic-mochi-540184.netlify.app/',
},
{
  name: 'Mangas magnifiques',
  description:
  "Découvrez l'art des shōjos à travers une collection d'images issues de l'univers de Zeynab ",
  stack: ['Blog', 'Manga', 'Musique'],
  sourceCode: 'https://github.com/JawedBS/Printit.git',
  livePreview: 'https://dynamic-mochi-540184.netlify.app/',
},
];

const skills = {
  languages: ['HTML', 'CSS'],
  frameworks: ['Comment fonctionne le WEB ? ', 'Qu\'est ce qu\'une page et un site WEB ? ','A quoi servent les différents types de sites internet ? ','Quels sont les éléments de design d\'une page WEB ? '],
  tools: ['VSCode', 'Navigateur Internet'],
  others: ['CodePen', 'FlexBox Froggy', 'Neocities'],
  // intro:
  //   "Voici les technologies que j’utilise au quotidien pour construire des interfaces modernes, accessibles et performantes.",
}


const extra = {
  title: 'À propos des Exploraclubs de l\'Exploradôme',
  content: [
    {
      heading: 'Qui sommes nous ?',
      text: "Savoir Apprendre est une association loi 1901 reconnue d’intérêt général, créée en 1997 par Goéry Delacôte, physicien et pionnier de la médiation scientifique interactive. Depuis plus de 25 ans, elle agit pour rendre les sciences, le numérique et les enjeux de société accessibles à toutes et tous, notamment aux jeunes et aux publics éloignés de la culture.Notre projet éducatif repose sur l’expérimentation, la manipulation et l’éveil à l’esprit critique. Nous croyons que la science doit être vécue, partagée et questionnée pour construire une société plus éclairée, inclusive et durable. Inauguré en 1998, l’Exploradôme est un musée associatif interactif, piloté et animé par l’association Savoir Apprendre.",
    },
    {
      heading: 'Que sont les Exploraclubs ?',
      text: "Ce sont des ateliers ludiques en petit groupe afin de faire découvrir les métiers et les arts du numérique. Toutes les semaines, nous nous réunissons pendant deux heures pour s'emparer de thématiques comme la programmation, les règles de bon usage de la technologie, tout en jouant et en s'amusant.",
    }
  ],
}

const contact = {
  // email is optional - if left empty Contact section won't show up
  email: 'reservation@exploradome.com',
  cta: "Vous pouvez nous joindres pour plus d'information en cliquant ci-dessous",
}


export { header, about, projects, skills, contact, extra }
