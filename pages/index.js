import block from "bem-css-modules";
import { useState } from "react";
import { fetchAPI } from "../lib/api";

import About from "../components/organisms/About";
import Contact from "../components/organisms/Contact";
import Header from "../components/organisms/Header";
import Hero from "../components/organisms/Hero";
import Projects from "../components/organisms/Projects";
import { HeaderContext } from "../contexts/HeaderContext";

block.setSettings({
  modifierDelimiter: "--",
});

function Home({ homepage, navigation }) {
  const { hero, about, myProjects, contact } = homepage.data.attributes;

  const [activeSectionID, setActiveSectionID] = useState(0);

  return (
    <HeaderContext.Provider value={{ activeSectionID, setActiveSectionID }}>
      <Header data={navigation} />

      <main>
        <Hero data={hero} />
        <About data={about} />
        <Projects data={myProjects} />
        <Contact data={contact} />
      </main>
    </HeaderContext.Provider>
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

  const navigation = await fetchAPI("/navigation", {
    populate: { Menu: { populate: { Menu: true } } },
  });

  return {
    props: {
      homepage,
      navigation,
    },
  };
}

export default Home;
