import block from "bem-css-modules";
import { motion } from "framer-motion";
import { useContext } from "react";

import { ProjectModalContext } from "../../../contexts/ProjectModalContext";

import styles from "./CloseBtn.module.scss";

const b = block(styles);

function CloseBtn() {
  const { closeModal } = useContext(ProjectModalContext);

  return (
    <motion.button
      className={`${b()} t-typo-btn ui-bg--secondary ui-color--t-primary`}
      aria-label="Zamknij"
      whileHover={{ rotate: 90 }}
      onClick={closeModal}
    ></motion.button>
  );
}

export default CloseBtn;
