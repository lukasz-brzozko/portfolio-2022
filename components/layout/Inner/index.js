import block from "bem-css-modules";

import styles from "./Inner.module.scss";

const b = block(styles);

function Inner({ children, className }) {
  const classNameText = className ? ` ${className}` : "";

  return <div className={`${b()}${classNameText}`}>{children}</div>;
}

export default Inner;
