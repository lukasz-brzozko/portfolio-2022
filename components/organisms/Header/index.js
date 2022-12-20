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

  const [isHeaderVisible, setIsHeaderVisible] = useState(true);
  const [isHeaderTransparent, setIsHeaderTransparent] = useState(true);

  useEffect(() => {
    scrollY.onChange((currVal) => {
      const prevVal = scrollY.getPrevious();

      if (currVal > 100) {
        if (prevVal + 100 > currVal) {
          setIsHeaderVisible(prevVal > currVal);
        }
        setIsHeaderTransparent(false);
      } else {
        setIsHeaderTransparent(true);
      }
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
        active: isHeaderVisible,
        transparent: isHeaderTransparent,
      })} ui-bg--bg-secondary ui-transition`}
    >
      <Inner>
        <Grid>
          {/* Logo */}
          <div className={`${b("logo")} ui-hide-0-tablet`}>
            <a
              className={`${b("link", {
                active: activeSectionID === 0,
              })} t-typo-menu`}
              href="#"
            >
              Łukasz Brzózko
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
