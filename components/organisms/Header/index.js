import block from "bem-css-modules";
import { motion } from "framer-motion";

import Grid from "../../layout/Grid";
import Inner from "../../layout/Inner";

import styles from "./Header.module.scss";

const b = block(styles);

function Header({ data }) {
  const { Menu: nav } = data.data.attributes.Menu;

  const navList = nav.map((item) => {
    const { id, name, link } = item;

    return (
      <li className={`${b("item")}`} key={id}>
        <a className={`${b("link")} t-typo-menu`} href={link}>
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
              className={`${b("link", { active: true })} t-typo-menu`}
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
