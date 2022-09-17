import block from "bem-css-modules";
import Hero from "../components/organisms/Hero";
import About from "../components/organisms/About";
import { fetchAPI } from "../lib/api";

block.setSettings({
  modifierDelimiter: "--",
});

function Home({ homepage }) {
  const { hero, about } = homepage.data.attributes;

  return (
    <>
      <Hero data={hero} />
      <About data={about} />
    </>
  );
}

export async function getStaticProps() {
  const homepage = await fetchAPI("/homepage", {
    populate: {
      hero: { populate: ["imgDesktop", "imgMobile", "overlay"] },
      about: { populate: ["textBlock", "tabs", "img"] },
    },
  });

  return {
    props: {
      homepage,
    },
  };
}

export default Home;
