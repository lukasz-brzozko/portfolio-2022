import block from "bem-css-modules";
import { forwardRef } from "react";

import styles from "./Inner.module.scss";

const b = block(styles);

const Inner = forwardRef(({ children, className }, ref) => {
  const classNameText = className ? ` ${className}` : "";

  return (
    <div ref={ref} className={`${b()}${classNameText}`}>
      {children}
    </div>
  );
});

Inner.displayName = "Inner";

export default Inner;
