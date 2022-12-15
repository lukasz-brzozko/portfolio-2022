/* eslint-disable react/no-unknown-property */
/* eslint-disable react/display-name */

import block from "bem-css-modules";
import { motion } from "framer-motion";
import { useContext } from "react";

import { TypewriterContext } from "../../../../../contexts/TypewriterContext";

import styles from "./Keyboard.module.scss";

const b = block(styles);

const KEY_VARIANTS = {
  initial: { fill: "#e6e6e6" },
  active: { fill: "var(--color-secondary)" },
};

function Keyboard() {
  const { activeBarIndex, setActiveBarIndex, barRefs, barStep, setBarStep } =
    useContext(TypewriterContext);

  const handleKeyClick = (e) => {
    if (activeBarIndex > 5) return;

    setBarStep((prevStep) => (prevStep <= 0.9 ? (prevStep += 0.1) : prevStep));

    if (barStep > 0.9) {
      setActiveBarIndex(activeBarIndex + 1);
      setBarStep(0);
    }
  };

  return (
    <motion.g className="keyboard">
      <path
        d="M892.0771,705.04148h-585.082a68.4964,68.4964,0,0,1-66.89649-83.21289l26.13379-118.78711H932.83979l26.13379,118.78711a68.49639,68.49639,0,0,1-66.89648,83.21289Zm-624.23731-200-25.78808,117.2168a66.49673,66.49673,0,0,0,64.94336,80.7832h585.082a66.49674,66.49674,0,0,0,64.94336-80.7832l-25.78809-117.2168Z"
        transform="translate(-238.47977 -171.03678)"
        fill="#f2f2f2"
      />

      {/* Keys */}
      <motion.path
        whileTap="active"
        variants={KEY_VARIANTS}
        className={b("key")}
        d="M351.24671,541.03678h-19a16,16,0,0,0,0,32h19a16,16,0,0,0,0-32Z"
        transform="translate(-238.47977 -171.03678)"
        fill="#e6e6e6"
        onClick={handleKeyClick}
      />
      <motion.path
        whileTap="active"
        variants={KEY_VARIANTS}
        className={b("key")}
        d="M412.24671,541.03678h-19a16,16,0,0,0,0,32h19a16,16,0,0,0,0-32Z"
        transform="translate(-238.47977 -171.03678)"
        fill="#e6e6e6"
        onClick={handleKeyClick}
      />
      <motion.path
        whileTap="active"
        variants={KEY_VARIANTS}
        className={b("key")}
        d="M473.24671,541.03678h-19a16,16,0,0,0,0,32h19a16,16,0,0,0,0-32Z"
        transform="translate(-238.47977 -171.03678)"
        fill="#e6e6e6"
        onClick={handleKeyClick}
      />
      <motion.path
        whileTap="active"
        variants={KEY_VARIANTS}
        className={b("key")}
        d="M534.24671,541.03678h-19a16,16,0,0,0,0,32h19a16,16,0,0,0,0-32Z"
        transform="translate(-238.47977 -171.03678)"
        fill="#e6e6e6"
        onClick={handleKeyClick}
      />
      <motion.path
        whileTap="active"
        variants={KEY_VARIANTS}
        className={b("key")}
        d="M595.24671,541.03678h-19a16,16,0,0,0,0,32h19a16,16,0,0,0,0-32Z"
        transform="translate(-238.47977 -171.03678)"
        fill="#e6e6e6"
        onClick={handleKeyClick}
      />
      <motion.path
        whileTap="active"
        variants={KEY_VARIANTS}
        className={b("key")}
        d="M656.24671,541.03678h-19a16,16,0,0,0,0,32h19a16,16,0,0,0,0-32Z"
        transform="translate(-238.47977 -171.03678)"
        fill="#e6e6e6"
        onClick={handleKeyClick}
      />
      <motion.path
        whileTap="active"
        variants={KEY_VARIANTS}
        className={b("key")}
        d="M717.24671,541.03678h-19a16,16,0,0,0,0,32h19a16,16,0,0,0,0-32Z"
        transform="translate(-238.47977 -171.03678)"
        fill="#e6e6e6"
        onClick={handleKeyClick}
      />
      <motion.path
        whileTap="active"
        variants={KEY_VARIANTS}
        className={b("key")}
        d="M778.24671,541.03678h-19a16,16,0,0,0,0,32h19a16,16,0,0,0,0-32Z"
        transform="translate(-238.47977 -171.03678)"
        fill="#e6e6e6"
        onClick={handleKeyClick}
      />
      <motion.path
        whileTap="active"
        variants={KEY_VARIANTS}
        className={b("key")}
        d="M839.24671,541.03678h-19a16,16,0,0,0,0,32h19a16,16,0,0,0,0-32Z"
        transform="translate(-238.47977 -171.03678)"
        fill="#e6e6e6"
        onClick={handleKeyClick}
      />
      <motion.path
        whileTap="active"
        variants={KEY_VARIANTS}
        className={b("key")}
        d="M379.74671,575.53678h-19a16,16,0,0,0,0,32h19a16,16,0,0,0,0-32Z"
        transform="translate(-238.47977 -171.03678)"
        fill="#e6e6e6"
        onClick={handleKeyClick}
      />
      <motion.path
        whileTap="active"
        variants={KEY_VARIANTS}
        className={b("key")}
        d="M440.74671,575.53678h-19a16,16,0,0,0,0,32h19a16,16,0,0,0,0-32Z"
        transform="translate(-238.47977 -171.03678)"
        fill="#e6e6e6"
        onClick={handleKeyClick}
      />
      <motion.path
        whileTap="active"
        variants={KEY_VARIANTS}
        className={b("key")}
        d="M501.74671,575.53678h-19a16,16,0,0,0,0,32h19a16,16,0,0,0,0-32Z"
        transform="translate(-238.47977 -171.03678)"
        fill="#e6e6e6"
        onClick={handleKeyClick}
      />
      <motion.path
        whileTap="active"
        variants={KEY_VARIANTS}
        className={b("key")}
        d="M562.74671,575.53678h-19a16,16,0,0,0,0,32h19a16,16,0,0,0,0-32Z"
        transform="translate(-238.47977 -171.03678)"
        fill="#e6e6e6"
        onClick={handleKeyClick}
      />
      <motion.path
        whileTap="active"
        variants={KEY_VARIANTS}
        className={b("key")}
        d="M623.74671,575.53678h-19a16,16,0,0,0,0,32h19a16,16,0,0,0,0-32Z"
        transform="translate(-238.47977 -171.03678)"
        fill="#e6e6e6"
        onClick={handleKeyClick}
      />
      <motion.path
        whileTap="active"
        variants={KEY_VARIANTS}
        className={b("key")}
        d="M684.74671,575.53678h-19a16,16,0,0,0,0,32h19a16,16,0,0,0,0-32Z"
        transform="translate(-238.47977 -171.03678)"
        fill="#e6e6e6"
        onClick={handleKeyClick}
      />
      <motion.path
        whileTap="active"
        variants={KEY_VARIANTS}
        className={b("key")}
        d="M745.74671,575.53678h-19a16,16,0,0,0,0,32h19a16,16,0,0,0,0-32Z"
        transform="translate(-238.47977 -171.03678)"
        fill="#e6e6e6"
        onClick={handleKeyClick}
      />
      <motion.path
        whileTap="active"
        variants={KEY_VARIANTS}
        className={b("key")}
        d="M806.74671,575.53678h-19a16,16,0,0,0,0,32h19a16,16,0,0,0,0-32Z"
        transform="translate(-238.47977 -171.03678)"
        fill="#e6e6e6"
        onClick={handleKeyClick}
      />
      <motion.path
        whileTap="active"
        variants={KEY_VARIANTS}
        className={b("key")}
        d="M867.74671,575.53678h-19a16,16,0,0,0,0,32h19a16,16,0,0,0,0-32Z"
        transform="translate(-238.47977 -171.03678)"
        fill="#e6e6e6"
        onClick={handleKeyClick}
      />
      <motion.path
        whileTap="active"
        variants={KEY_VARIANTS}
        className={b("key")}
        d="M351.24671,608.03678h-19a16,16,0,0,0,0,32h19a16,16,0,0,0,0-32Z"
        transform="translate(-238.47977 -171.03678)"
        fill="#e6e6e6"
        onClick={handleKeyClick}
      />
      <motion.path
        whileTap="active"
        variants={KEY_VARIANTS}
        className={b("key")}
        d="M412.24671,608.03678h-19a16,16,0,0,0,0,32h19a16,16,0,0,0,0-32Z"
        transform="translate(-238.47977 -171.03678)"
        fill="#e6e6e6"
        onClick={handleKeyClick}
      />
      <motion.path
        whileTap="active"
        variants={KEY_VARIANTS}
        className={b("key")}
        d="M473.24671,608.03678h-19a16,16,0,0,0,0,32h19a16,16,0,0,0,0-32Z"
        transform="translate(-238.47977 -171.03678)"
        fill="#e6e6e6"
        onClick={handleKeyClick}
      />
      <motion.path
        whileTap="active"
        variants={KEY_VARIANTS}
        className={b("key")}
        d="M534.24671,608.03678h-19a16,16,0,0,0,0,32h19a16,16,0,0,0,0-32Z"
        transform="translate(-238.47977 -171.03678)"
        fill="#e6e6e6"
        onClick={handleKeyClick}
      />
      <motion.path
        whileTap="active"
        variants={KEY_VARIANTS}
        className={b("key")}
        d="M595.24671,608.03678h-19a16,16,0,0,0,0,32h19a16,16,0,0,0,0-32Z"
        transform="translate(-238.47977 -171.03678)"
        fill="#e6e6e6"
        onClick={handleKeyClick}
      />
      <motion.path
        whileTap="active"
        variants={KEY_VARIANTS}
        className={b("key")}
        d="M656.24671,608.03678h-19a16,16,0,0,0,0,32h19a16,16,0,0,0,0-32Z"
        transform="translate(-238.47977 -171.03678)"
        fill="#e6e6e6"
        onClick={handleKeyClick}
      />
      <motion.path
        whileTap="active"
        variants={KEY_VARIANTS}
        className={b("key")}
        d="M717.24671,608.03678h-19a16,16,0,0,0,0,32h19a16,16,0,0,0,0-32Z"
        transform="translate(-238.47977 -171.03678)"
        fill="#e6e6e6"
        onClick={handleKeyClick}
      />
      <motion.path
        whileTap="active"
        variants={KEY_VARIANTS}
        className={b("key")}
        d="M778.24671,608.03678h-19a16,16,0,0,0,0,32h19a16,16,0,0,0,0-32Z"
        transform="translate(-238.47977 -171.03678)"
        fill="#e6e6e6"
        onClick={handleKeyClick}
      />
      <motion.path
        whileTap="active"
        variants={KEY_VARIANTS}
        className={b("key")}
        d="M839.24671,608.03678h-19a16,16,0,0,0,0,32h19a16,16,0,0,0,0-32Z"
        transform="translate(-238.47977 -171.03678)"
        fill="#e6e6e6"
        onClick={handleKeyClick}
      />
      <motion.path
        whileTap="active"
        variants={KEY_VARIANTS}
        className={b("key")}
        d="M702.99671,654.04148h-206a16,16,0,0,0,0,32h206a16,16,0,0,0,0-32Z"
        transform="translate(-238.47977 -171.03678)"
        fill="#e6e6e6"
        onClick={handleKeyClick}
      />
    </motion.g>
  );
}

export default Keyboard;
