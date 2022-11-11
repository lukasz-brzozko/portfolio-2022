import block from "bem-css-modules";
import { motion } from "framer-motion";

import styles from "./Button.module.scss";

const b = block(styles);

export const BUTTON_PROP_VARIANTS = {
  default: " deafult",
  alt: "alt",
  dark: "dark",
};

export const BUTTON_TYPES = {
  button: "button",
  link: "link",
};

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
  btnAltInitial: {
    backgroundColor: "var(--color-secondary)",
    y: 2,
    borderColor: "rgb(var(--color-secondary-rgb)/ 0%)",
  },
  btnAltActive: {
    backgroundColor: "var(--color-secondary-transparent)",
    y: 0,
    borderColor: "rgb(var(--color-secondary-rgb)/ 100%)",
  },
  btnDarkInitial: {
    backgroundColor: "rgb(var(--color-black-rgb) / 100%)",
    y: 2,
    borderColor: "rgb(var(--color-black-rgb)/ 0%)",
  },
  btnDarkActive: {
    backgroundColor: "rgb(var(--color-black-rgb) / 0%)",
    y: 0,
    borderColor: "rgb(var(--color-black-rgb)/ 100%)",
  },
};

function Button({
  children,
  variant = BUTTON_PROP_VARIANTS.default,
  type = BUTTON_TYPES.button,
  url = null,
}) {
  const isAltBtn = variant === BUTTON_PROP_VARIANTS.alt;
  const isDarkBtn = variant === BUTTON_PROP_VARIANTS.dark;

  const HTMLElement = type === BUTTON_TYPES.button ? motion.button : motion.a;
  const href = type === BUTTON_TYPES.link ? url : null;

  return (
    <HTMLElement
      className={`${b()} t-typo-btn`}
      variants={BUTTON_VARIANTS}
      initial={
        isAltBtn ? "btnAltInitial" : isDarkBtn ? "btnDarkInitial" : "btnInitial"
      }
      whileHover={
        isAltBtn ? "btnAltActive" : isDarkBtn ? "btnDarkActive" : "btnActive"
      }
      transition={{
        backgroundColor: {
          type: "tween",
          duration: 0.2,
        },
      }}
      href={href}
      target={href ? "_blank" : "_self"}
    >
      {children}
    </HTMLElement>
  );
}

export default Button;
