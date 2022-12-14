import block from "bem-css-modules";

import styles from "./Badge.module.scss";

const b = block(styles);

function Badge({ children }) {
  return <div className={`${b()} t-typo-btn`}>{children}</div>;
}

export default Badge;
