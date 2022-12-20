import block from "bem-css-modules";
import { useScroll } from "framer-motion";

import { HeaderContext } from "../../../contexts/HeaderContext";
import Grid from "../../layout/Grid";
import Inner from "../../layout/Inner";

import { useContext, useEffect, useState } from "react";
import styles from "./Header.module.scss";

const b = block(styles);

function Header({ data }) {
  const { activeSectionID } = useContext(HeaderContext);
  const { scrollY, scrollYProgress } = useScroll();

  const [isHeaderTransparent, setIsHeaderTransparent] = useState(true);
  const [firstLinkContent, setFirstLinkContent] = useState("Start");

  useEffect(() => {
    scrollY.onChange((currVal) => {
      const prevVal = scrollY.getPrevious();

      setIsHeaderTransparent(currVal <= 100);
    });

    return () => scrollY.clearListeners();
  }, [scrollY]);

  const { Menu: nav } = data.data.attributes.Menu;

  const navList = nav.map((item) => {
    const { id, name, link } = item;

    return (
      <li className={`${b("item")}`} key={id}>
        <a
          className={`${b("link", {
            active: activeSectionID === id,
          })} t-typo-menu`}
          href={link}
        >
          {name}
        </a>
      </li>
    );
  });

  return (
    <header
      className={`${b("", {
        transparent: isHeaderTransparent,
      })} ui-bg--bg-secondary ui-transition`}
    >
      <Inner>
        <Grid className={`${b("grid")}`}>
          {/* Logo */}
          <div className={`${b("logo")}`}>
            <a
              className={`${b("link", {
                active: activeSectionID === 0,
              })} t-typo-menu`}
              href="#"
            >
              {firstLinkContent}
            </a>
          </div>

          {/* Nav */}
          <nav className={`${b("nav")}`}>
            <ul className={`${b("list")} ui-list`}>{navList}</ul>
          </nav>
        </Grid>
      </Inner>
    </header>
  );
}

export default Header;
