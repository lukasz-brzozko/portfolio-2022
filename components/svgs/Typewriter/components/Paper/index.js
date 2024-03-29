/* eslint-disable react/no-unknown-property */
/* eslint-disable react/display-name */

import { motion, useAnimationControls } from "framer-motion";
import { useCallback, useContext, useEffect, useRef } from "react";

import { TypewriterContext } from "../../../../../contexts/TypewriterContext";

const transition = (i) => ({
  type: "spring",
  damping: 9,
  velocity: 3,
  stiffness: 100,
  mass: 0.5,
});

const BAR_VARIANTS = {
  initial: {
    originX: 0,
    x: -238.47977,
    y: -171.03678,
    scaleX: 0,
  },

  active: {
    x: -238.47977,
    y: -171.03678,
    scaleX: 1,
  },
};

function Paper() {
  const {
    isInView: isSVGInView,
    activeBarIndex,
    barStep,
  } = useContext(TypewriterContext);

  const controlsOne = useAnimationControls();
  const controlsTwo = useAnimationControls();
  const controlsThree = useAnimationControls();
  const controlsFour = useAnimationControls();
  const controlsFive = useAnimationControls();
  const controlsSix = useAnimationControls();

  const barRefs = useRef([]);

  const activeCondition = isSVGInView ? "active" : false;

  const controlsAnimation = useCallback(() => {
    return { x: -238.47977, y: -171.03678, scaleX: barStep };
  }, [barStep]);

  useEffect(() => {
    if (activeBarIndex === 0) {
      controlsOne.start(controlsAnimation);
    } else if (activeBarIndex === 1) {
      controlsTwo.start(controlsAnimation);
    } else if (activeBarIndex === 2) {
      controlsThree.start(controlsAnimation);
    } else if (activeBarIndex === 3) {
      controlsFour.start(controlsAnimation);
    } else if (activeBarIndex === 4) {
      controlsFive.start(controlsAnimation);
    } else if (activeBarIndex === 5) {
      controlsSix.start(controlsAnimation);
    }
  }, [
    controlsOne,
    controlsTwo,
    controlsThree,
    controlsFour,
    controlsFive,
    controlsSix,
    controlsAnimation,
    activeBarIndex,
  ]);

  return (
    <motion.g className="paper">
      <path
        d="M797.37855,504.03678H402.61488a23.64479,23.64479,0,0,1-23.61817-23.61816l.02588-.22559c13.96582-60.42773,13.96045-136.18164-.0166-238.40234l-.00928-.13574a23.64512,23.64512,0,0,1,23.61817-23.61817H797.37855A23.64511,23.64511,0,0,1,820.99671,241.655l-.022.209a566.87235,566.87235,0,0,0,0,238.3457l.022.209A23.64478,23.64478,0,0,1,797.37855,504.03678Z"
        transform="translate(-238.47977 -171.03678)"
        fill="#fff"
      />
      <path
        d="M797.37855,504.03678H402.61488a23.64479,23.64479,0,0,1-23.61817-23.61816l.02588-.22559c13.96582-60.42773,13.96045-136.18164-.0166-238.40234l-.00928-.13574a23.64512,23.64512,0,0,1,23.61817-23.61817H797.37855A23.64511,23.64511,0,0,1,820.99671,241.655l-.022.209a566.87235,566.87235,0,0,0,0,238.3457l.022.209A23.64478,23.64478,0,0,1,797.37855,504.03678ZM380.9972,480.53092a21.64307,21.64307,0,0,0,21.61768,21.50586H797.37855a21.64279,21.64279,0,0,0,21.61767-21.51367,568.84463,568.84463,0,0,1,0-238.97266,21.64279,21.64279,0,0,0-21.61767-21.51367H402.61488a21.64308,21.64308,0,0,0-21.61817,21.55078C394.98939,343.95622,394.99036,419.89274,380.9972,480.53092Z"
        transform="translate(-238.47977 -171.03678)"
        fill="#e6e6e6"
      />
      <motion.path
        d="M755.99671,288.53678h-319a6.5,6.5,0,0,1,0-13h319a6.5,6.5,0,0,1,0,13Z"
        transform="translate(-238.47977 -171.03678)"
        fill="#e6e6e6"
        initial="initial"
        animate={activeBarIndex === 0 ? controlsOne : false}
        variants={BAR_VARIANTS}
        transition={transition}
      />
      <motion.path
        d="M755.99671,320.03678h-319a6.5,6.5,0,0,1,0-13h319a6.5,6.5,0,0,1,0,13Z"
        transform="translate(-238.47977 -171.03678)"
        fill="#e6e6e6"
        initial="initial"
        animate={activeBarIndex === 1 ? controlsTwo : false}
        variants={BAR_VARIANTS}
        transition={transition}
      />
      <motion.path
        d="M755.99671,351.53678h-319a6.5,6.5,0,0,1,0-13h319a6.5,6.5,0,0,1,0,13Z"
        transform="translate(-238.47977 -171.03678)"
        fill="#e6e6e6"
        initial="initial"
        animate={activeBarIndex === 2 ? controlsThree : false}
        variants={BAR_VARIANTS}
        transition={transition}
      />
      <motion.path
        d="M755.99671,383.03678h-319a6.5,6.5,0,0,1,0-13h319a6.5,6.5,0,0,1,0,13Z"
        transform="translate(-238.47977 -171.03678)"
        fill="#e6e6e6"
        initial="initial"
        animate={activeBarIndex === 3 ? controlsFour : false}
        variants={BAR_VARIANTS}
        transition={transition}
      />
      <motion.path
        d="M755.99671,414.53678h-319a6.5,6.5,0,0,1,0-13h319a6.5,6.5,0,0,1,0,13Z"
        transform="translate(-238.47977 -171.03678)"
        fill="#e6e6e6"
        initial="initial"
        animate={activeBarIndex === 4 ? controlsFive : false}
        variants={BAR_VARIANTS}
        transition={transition}
      />
      <motion.path
        d="M755.99671,446.03678h-319a6.5,6.5,0,0,1,0-13h319a6.5,6.5,0,0,1,0,13Z"
        transform="translate(-238.47977 -171.03678)"
        fill="#6c63ff"
        style={{ fill: "var(--color-secondary)" }}
        initial="initial"
        animate={activeBarIndex === 5 ? controlsSix : false}
        variants={BAR_VARIANTS}
        transition={transition}
      />
    </motion.g>
  );
}

export default Paper;
