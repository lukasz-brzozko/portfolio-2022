import block from "bem-css-modules";
import { motion } from "framer-motion";

import { VARIANTS, VARIANTS_NAMES } from "../../../constants/animations";
import { TEXT_VIEWPORT } from "../../../constants/text";

import styles from "./TextBlock.module.scss";

const b = block(styles);

function TextBlock({ data = null }) {
  if (data === null) return;

  const { title, titleTag = "h2", desc } = data;

  if (!title || !desc) return;

  // Create pseudo-component to use custom tag
  const TitleTag = titleTag;

  return (
    <motion.div
      className={b()}
      initial={VARIANTS_NAMES.hidden}
      whileInView={VARIANTS_NAMES.visible}
      variants={VARIANTS}
      viewport={TEXT_VIEWPORT}
    >
      {title && (
        <motion.h2
          custom={0}
          variants={VARIANTS}
          className={`${b("title")} t-typo-h2`}
        >
          {title}
        </motion.h2>
      )}
      {desc && (
        <motion.p
          custom={1}
          variants={VARIANTS}
          className={`${b("desc")} t-typo-p1 ui-color--t-secondary`}
        >
          {desc}
        </motion.p>
      )}
    </motion.div>
  );
}

export default TextBlock;
