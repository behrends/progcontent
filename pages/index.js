import Head from 'next/head';
import CourseCard from '../components/CourseCard';
import progJsLogo from '../public/images/prog-js.png';
import gitLogo from '../public/images/git-einstieg.png';
import htmlLogo from '../public/images/html-kompakt.png';
import cssLogo from '../public/images/css-kompakt.png';
import jsFromJavaLogo from '../public/images/js-from-java.png';
import jsForReactLogo from '../public/images/js-for-react.png';

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen py-2">
      <Head>
        <title>Prog Content</title>
        <meta
          name="description"
          content="Programmieren lernen mit interaktiven Kursen"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="flex flex-col items-center justify-center w-full flex-1 px-20 text-center">
        <h1 className="text-6xl font-bold">Prog Content</h1>

        <p className="mt-3 text-2xl">
          Programmieren lernen mit interaktiven Kursen
        </p>

        <div className="flex flex-wrap items-center justify-around max-w-full mt-6 sm:w-full">
          <CourseCard
            link="/prog-lernen-js"
            title="Programmieren lernen mit JavaScript"
            description="Ohne Vorkenntnisse in die Programmierung einsteigen"
            image={progJsLogo}
            wip={true}
          />

          <CourseCard
            link="/git-einstieg"
            title="Einstieg in git"
            description="Versionskontrolle mit git lernen"
            image={gitLogo}
            wip={true}
          />

          <CourseCard
            link="/html-kompakt"
            title="HTML kompakt"
            description="Eine kurze Einführung in HTML"
            image={htmlLogo}
          />

          <CourseCard
            link="/css-kompakt"
            title="CSS kompakt"
            description="Ein kurze Einführung in CSS"
            image={cssLogo}
          />

          <CourseCard
            link="/js-from-java"
            title="JavaScript aus Java-Sicht"
            description="Einstieg in JavaScript für Leute, die Java kennen."
            image={jsFromJavaLogo}
          />

          <CourseCard
            link="/js-for-react"
            title="JavaScript für React (Native)"
            description="Hier werden die Java-Script-Grundlagen für React
            (Native) gelegt."
            image={jsForReactLogo}
            wip={true}
          />
        </div>
      </main>

      <footer className="flex items-center justify-center w-full h-12 border-t">
        <span className="flex items-center justify-center">
          <span>{`© ${new Date().getFullYear()}`}</span>
          <a
            rel="author"
            href="https://www.behrends.io"
            target="_blank"
            className="ml-8"
          >
            Erik Behrends
          </a>
        </span>
        <a className="ml-8" href="/impressum">
          Impressum
        </a>
      </footer>
    </div>
  );
}
