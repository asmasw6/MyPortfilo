import Nav from "./components/nav";
import AboutMe from "./components/Aboutme";
import Skills from "./components/skills";
import Eduction from "./components/education";
import Projects from "./components/projects";
import Head from 'next/head';


export default function Home() {
  return (
    <>
      <Head>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link rel="stylesheet" href="css/style.css" />
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0-beta3/css/all.min.css"
        />
        <title>Asma Saleh</title>
      </Head>
      {/* Nav-bar */}
      <Nav />

      {/* About Me Section */}
      <AboutMe />

      {/* Education Section */}
      <Eduction />

      {/* Skills Section */}
      <Skills />

      {/* Projects Section */}
      <Projects />

      {/* Experience Section (if you have one) */}
      {/* <Experience /> */}
    </>
  );
}
