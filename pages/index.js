import Hero from "../components/organisms/Hero";
import { fetchAPI } from "../lib/api";

function Home({ homepage }) {
  const { hero } = homepage.data.attributes;

  return (
    <>
      <Hero data={hero} />
    </>
  );
}

export async function getStaticProps() {
  const homepage = await fetchAPI("/homepage", {
    populate: {
      hero: { populate: "img" },
    },
  });

  return {
    props: {
      homepage,
    },
  };
}

export default Home;
