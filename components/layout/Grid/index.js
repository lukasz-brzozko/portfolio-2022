import block from "bem-css-modules";

import styles from "./Grid.module.scss";

const b = block(styles);

function Grid({ children, cols = 12 }) {
  return (
    <div className={b()} style={{ "--cols": cols }}>
      {children}
    </div>
  );
}

export default Grid;
