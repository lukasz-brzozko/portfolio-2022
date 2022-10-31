import block from "bem-css-modules";
import { motion } from "framer-motion";

import styles from "./Button.module.scss";

const b = block(styles);

const BUTTON_VARIANTS = {
  btnInitial: {
    backgroundColor: "var(--color-secondary-transparent)",
    y: 2,
    borderColor: "rgb(var(--color-primary-rgb)/ 30%)",
  },
  btnActive: {
    backgroundColor: "var(--color-secondary)",
    y: 0,
    borderColor: "rgb(var(--color-primary-rgb)/ 0%)",
  },
};

function Button({ children }) {
  return (
    <motion.button
      className={`${b()} t-typo-btn`}
      variants={BUTTON_VARIANTS}
      initial="btnInitial"
      whileHover="btnActive"
      transition={{
        backgroundColor: {
          type: "tween",
          duration: 0.2,
        },
      }}
    >
      {children}
    </motion.button>
  );
}

export default Button;
