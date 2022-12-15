import block from "bem-css-modules";
import { fetchAPI } from "../lib/api";

import About from "../components/organisms/About";
import Contact from "../components/organisms/Contact";
import Hero from "../components/organisms/Hero";
import Projects from "../components/organisms/Projects";

block.setSettings({
  modifierDelimiter: "--",
});

function Home({ homepage }) {
  const { hero, about, myProjects, contact } = homepage.data.attributes;

  return (
    <>
      {/* <Hero data={hero} />
      <About data={about} />
      <Projects data={myProjects} /> */}
      <Contact data={contact} />
      {/* <div style={{ height: "300vh" }}></div> */}
    </>
  );
}

export async function getStaticProps() {
  const homepage = await fetchAPI("/homepage", {
    populate: {
      hero: { populate: ["imgDesktop", "imgMobile", "overlay"] },
      about: { populate: ["textBlock", "tabs", "img"] },
      myProjects: {
        populate: {
          textBlock: true,
          projects: { populate: ["badges", "gallery", "img"] },
        },
      },
      contact: { populate: ["textBlock", "img"] },
    },
  });

  return {
    props: {
      homepage,
    },
  };
}

export default Home;
