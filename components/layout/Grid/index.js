import block from "bem-css-modules";

import styles from "./Grid.module.scss";

const b = block(styles);

function Grid({ children, cols, className }) {
  const styleAttr = cols ? { "--cols": cols } : null;

  return (
    <div className={`${b()} ${className ?? ""}`} style={styleAttr}>
      {children}
    </div>
  );
}

export default Grid;
