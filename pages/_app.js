import "./firebase";

import PageHead from "../components/organisms/PageHead";

import "../styles/base/cssVars/_index.scss";
import "../styles/globals.scss";

function MyApp({ Component, pageProps }) {
  return (
    <>
      <PageHead />
      <Component {...pageProps} />
      <div id="portal"></div>
    </>
  );
}

export default MyApp;
