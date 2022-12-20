import block from "bem-css-modules";
import { motion } from "framer-motion";

import Grid from "../../layout/Grid";
import Inner from "../../layout/Inner";
import { HeaderContext } from "../../../contexts/HeaderContext";

import styles from "./Header.module.scss";
import { useContext } from "react";

const b = block(styles);

function Header({ data }) {
  const { activeSectionID } = useContext(HeaderContext);

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
    <header className={`${b()} ui-bg--bg-secondary`}>
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
