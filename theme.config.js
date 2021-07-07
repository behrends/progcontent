export default {
  repository: 'https://github.com/behrends/progcontent', // project repo
  docsRepository: 'https://github.com/behrends/progcontent', // docs repo
  branch: 'main', // branch of docs
  path: '/', // path of docs
  titleSuffix: ' – Prog Content',
  nextLinks: true,
  prevLinks: true,
  search: true,
  customSearch: null, // customizable, you can use algolia for example
  darkMode: true,
  footer: true,
  footerText: `© ${new Date().getFullYear()} Erik Behrends.`,
  footerEditOnGitHubLink: true, // will link to the docs repo
  logo: (
    <>
      <span className="mr-2 font-extrabold hidden md:inline">
        Prog Content
      </span>
      <span className="text-gray-600 font-normal hidden md:inline">
        Interaktive Kurse zum Programmieren
      </span>
    </>
  ),
  head: (
    <>
      <meta
        name="viewport"
        content="width=device-width, initial-scale=1.0"
      />
      <meta
        name="description"
        content="Prog Content - Interaktive Kurse zum Programmieren"
      />
      <meta
        name="og:title"
        content="Prog Content - Interaktive Kurse zum Programmieren"
      />
    </>
  ),
};
