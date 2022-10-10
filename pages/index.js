import block from "bem-css-modules";
import Hero from "../components/organisms/Hero";
import About from "../components/organisms/About";
import { fetchAPI } from "../lib/api";
import Projects from "../components/organisms/Projects";

block.setSettings({
  modifierDelimiter: "--",
});

function Home({ homepage }) {
  const { hero, about, myProjects } = homepage.data.attributes;

  return (
    <>
      {/* <Hero data={hero} />
      <About data={about} /> */}
      <Projects data={myProjects} />
      <div style={{ height: "300vh" }}></div>
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
          projects: { populate: "img" },
        },
      },
    },
  });

  return {
    props: {
      homepage,
    },
  };
}

export default Home;
