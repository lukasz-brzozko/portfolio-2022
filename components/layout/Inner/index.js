import block from "bem-css-modules";
import { forwardRef } from "react";

import styles from "./Inner.module.scss";

const b = block(styles);

const Inner = forwardRef(({ children, className, wide = false }, ref) => {
  const customClasses = className ? ` ${className}` : "";
  const baseClassName = wide ? ` ${b(null, { wide: true })}` : b();

  return (
    <div ref={ref} className={`${baseClassName}${customClasses}`}>
      {children}
    </div>
  );
});

Inner.displayName = "Inner";

export default Inner;
