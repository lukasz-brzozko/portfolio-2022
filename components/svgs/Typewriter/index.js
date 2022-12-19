/* eslint-disable react/no-unknown-property */
/* eslint-disable react/display-name */
import block from "bem-css-modules";
import { motion } from "framer-motion";
import { useRef, useState } from "react";

import { TypewriterContext } from "../../../contexts/TypewriterContext";
import Keyboard from "./components/Keyboard";
import Paper from "./components/Paper";
import Person from "./components/Person";

import styles from "./Typewriter.module.scss";

const b = block(styles);

function Typewriter() {
  const refSVG = useRef(null);

  const [activeBarIndex, setActiveBarIndex] = useState(0);
  const [barStep, setBarStep] = useState(0);

  return (
    <TypewriterContext.Provider
      value={{
        activeBarIndex,
        barStep,
        setActiveBarIndex,
        setBarStep,
      }}
    >
      <motion.svg
        ref={refSVG}
        className={b()}
        xmlns="http://www.w3.org/2000/svg"
        width="722.113"
        height="558.151"
        data-name="Layer 1"
        viewBox="0 0 722.113 558.151"
      >
        <Keyboard />
        <Paper />

        {/* Bar */}
        <path
          className="bar"
          d="M928.99671,516.53678h-658a13.5,13.5,0,0,1,0-27h658a13.5,13.5,0,0,1,0,27Z"
          transform="translate(-238.47977 -171.03678)"
          fill="#f2f2f2"
        />

        <Person />
      </motion.svg>
    </TypewriterContext.Provider>
  );
}

export default Typewriter;
