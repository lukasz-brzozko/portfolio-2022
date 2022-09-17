import block from "bem-css-modules";

import TextBlock from "../../molecules/TextBlock";
import Grid from "../../layout/Grid";
import Inner from "../../layout/Inner";

import styles from "./About.module.scss";

const b = block(styles);

function About({ data = null }) {
  if (data === null) return;

  return (
    <section className={`${b()} ui-bg--bg-secondary`}>
      <Inner>
        <Grid>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Esse, natus
          ullam. Culpa perferendis quisquam assumenda. Qui, accusantium! Ratione
          optio, neque quos totam eius, nemo harum temporibus quia consectetur
          quod maiores.
        </Grid>
      </Inner>
    </section>
  );
}

export default About;
