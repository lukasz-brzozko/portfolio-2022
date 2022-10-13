import block from "bem-css-modules";
import { motion } from "framer-motion";

import styles from "./Button.module.scss";

const b = block(styles);

function Button({ children }) {
  return (
    <motion.button className={`${b()} t-typo-btn`}>{children}</motion.button>
  );
}

export default Button;
