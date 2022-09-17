import block from "bem-css-modules";
import Hero from "../components/organisms/Hero/Hero";
import { fetchAPI } from "../lib/api";

block.setSettings({
  modifierDelimiter: "--",
});

function Home({ homepage }) {
  const { hero } = homepage.data.attributes;

  return (
    <>
      <Hero data={hero} />
      <div style={{ height: "200vh", backgroundColor: "black" }}></div>
    </>
  );
}

export async function getStaticProps() {
  const homepage = await fetchAPI("/homepage", {
    populate: {
      hero: { populate: ["imgDesktop", "imgMobile", "overlay"] },
    },
  });

  return {
    props: {
      homepage,
    },
  };
}

export default Home;
