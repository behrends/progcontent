export default {
  github: 'https://github.com/behrends/progcontent', // project repo
  docsRepositoryBase: 'https://github.com/behrends/progcontent', // docs repo
  titleSuffix: ' – Prog Content',
  nextLinks: true,
  prevLinks: true,
  search: true,
  darkMode: true,
  defaultMenuCollapsed: false,
  font: true,
  footer: true,
  footerText: `© ${new Date().getFullYear()} Erik Behrends.`,
  footerEditLink: 'Diese Seite bearbeiten.',
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
