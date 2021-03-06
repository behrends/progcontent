export default {
  github: 'https://github.com/behrends/progcontent', // project repo
  docsRepositoryBase: 'https://github.com/behrends/progcontent', // docs repo
  titleSuffix: '',
  nextLinks: true,
  prevLinks: true,
  search: false,
  unstable_stork: false,
  darkMode: true,
  defaultMenuCollapsed: false,
  font: true,
  footer: true,
  footerText: (
    <span>
      <abbr
        title="Dieses Werk ist lizenziert unter einer Creative Commons Namensnennung - Nicht-kommerziell - Weitergabe unter gleichen Bedingungen 4.0 International Lizenz."
        style={{ cursor: 'help', marginRight: '10px' }}
      >
        <a
          rel="license"
          href="https://creativecommons.org/licenses/by-nc-sa/4.0/"
          target="_blank"
        >
          CC BY-NC-SA 4.0
        </a>
      </abbr>
      <span>
        {`© ${new Date().getFullYear()} `}
        <a
          rel="author"
          href="https://www.behrends.io"
          target="_blank"
        >
          Erik Behrends
        </a>
      </span>
      <a href="/impressum" style={{ marginLeft: '10px' }}>
        Impressum
      </a>
    </span>
  ),
  // footerText: `© ${new Date().getFullYear()} Erik Behrends.`,
  footerEditLink: 'Diese Seite bearbeiten.',
  logo: <span className="font-extrabold">Prog Content</span>,
  head: (
    <>
      <meta
        name="viewport"
        content="width=device-width, initial-scale=1.0"
      />
      <meta
        name="description"
        content="Prog Content - Eigenständig Programmieren lernen mit interaktiven Kursen"
      />
      <meta
        name="og:title"
        content="Prog Content - Eigenständig Programmieren lernen mit interaktiven Kursen"
      />
    </>
  ),
};
