/* eslint-disable react/no-unknown-property */
/* eslint-disable react/display-name */
import { motion, useAnimation } from "framer-motion";
import { useCallback, useContext, useEffect, useState } from "react";

import { DeveloperContext } from "../../../../../contexts/DeveloperContext";

const transition = (i, dynamicDelay = true) => ({
  delay: dynamicDelay ? i * 0.3 : 0,
  type: "spring",
  damping: 7,
  velocity: 15,
  stiffness: 300,
  mass: 1,
});

const VARIANTS = {
  hidden: {
    scaleX: 0,
  },
  animateScreenBtn: (color) => ({
    fill: color,
    scale: 1.2,
  }),
};

function DesktopScreen() {
  const isSVGInView = useContext(DeveloperContext);
  const animation = useAnimation();

  const [isAnimationInitiated, setIsAnimationInitiated] = useState(false);
  const [intervalID, setIntervalID] = useState(null);

  const moveScreenBarsSequence = useCallback(async () => {
    await animation.start((i = 0) => ({
      translateY: i === 0 ? "3.5%" : i === 1 ? "3.5%" : "-7.5%",
      transition: transition(i, false),
    }));

    await animation.start((i = 0) => ({
      translateY: i === 0 ? "7.5%" : i === 1 ? "-3.5%" : "-3.5%",
      transition: transition(i, false),
    }));

    await animation.start((i = 0) => ({
      translateY: "0%",
      transition: transition(i, false),
    }));
  }, [animation]);

  const showScreenBarsSequence = useCallback(async () => {
    await animation.start((i = 0) => ({
      scaleX: 1,
      transition: transition(i, true),
    }));

    setIsAnimationInitiated(true);
  }, [animation]);

  useEffect(() => {
    if (isSVGInView && !isAnimationInitiated && intervalID === null) {
      showScreenBarsSequence();
      return;
    }

    if (isSVGInView && isAnimationInitiated && intervalID === null) {
      moveScreenBarsSequence();
      setIntervalID(setInterval(moveScreenBarsSequence, 5000));
      return;
    }

    if (!isSVGInView && intervalID !== null) {
      clearInterval(intervalID);
      setIntervalID(null);
      return;
    }
  }, [
    showScreenBarsSequence,
    intervalID,
    isAnimationInitiated,
    isSVGInView,
    moveScreenBarsSequence,
  ]);

  return (
    <g className="desktop-screen">
      <path
        d="M398.28,501.35193v102.56h71.85v-102.56a3.448,3.448,0,0,0-2.43-3.3,3.1749,3.1749,0,0,0-1.03-.16H401.75A3.46328,3.46328,0,0,0,398.28,501.35193Zm28.04,35.24a7.67033,7.67033,0,0,1,15.34,0v11.9a7.6701,7.6701,0,0,1-15.34,0Z"
        transform="translate(-206.59003 -163.87113)"
        fill="#2f2e41"
      />
      <path
        d="M398.06006,600.632v9.89a1.94622,1.94622,0,0,0,1.93,1.94h68.43a1.93972,1.93972,0,0,0,1.93-1.94v-9.89Z"
        transform="translate(-206.59003 -163.87113)"
        fill="#3f3d56"
      />
      <path
        d="M285.25,346.832V534.09192a9.00714,9.00714,0,0,0,9,9h277.5a9.0071,9.0071,0,0,0,9-9V346.832a9.01147,9.01147,0,0,0-9-8.99H294.25A9.01151,9.01151,0,0,0,285.25,346.832Z"
        transform="translate(-206.59003 -163.87113)"
        fill="#3f3d56"
      />
      <path
        d="M291.76,349.16193v182.62a4.81833,4.81833,0,0,0,4.81,4.81H569.44a4.81829,4.81829,0,0,0,4.81-4.81v-182.62a4.82047,4.82047,0,0,0-4.81-4.82H296.57A4.82051,4.82051,0,0,0,291.76,349.16193Z"
        transform="translate(-206.59003 -163.87113)"
        fill="#fff"
      />
      <path
        d="M342.4,611.79193a2.9484,2.9484,0,0,0,2.32,1.11h162.34a2.98725,2.98725,0,0,0,2.92-3.6l-2.52-11.97a2.99264,2.99264,0,0,0-1.86-2.17,2.89454,2.89454,0,0,0-1.06-.19995H347.23a2.8943,2.8943,0,0,0-1.06.19995,2.99239,2.99239,0,0,0-1.86,2.17l-2.52,11.97A2.985,2.985,0,0,0,342.4,611.79193Z"
        transform="translate(-206.59003 -163.87113)"
        fill="#2f2e41"
      />
      <path
        d="M560.58451,369.49866H305.26115a1.0156,1.0156,0,0,1,0-2.0307H560.58451a1.0156,1.0156,0,0,1,0,2.0307Z"
        transform="translate(-206.59003 -163.87113)"
        fill="#3f3d56"
      />
      <motion.ellipse
        custom="#FF605C"
        whileHover={VARIANTS.animateScreenBtn}
        whileTap={VARIANTS.animateScreenBtn}
        cx="116.05131"
        cy="192.32963"
        rx="5.95043"
        ry="6.08304"
        fill="#3f3d56"
      />
      <motion.ellipse
        custom="#FFBD44"
        whileHover={VARIANTS.animateScreenBtn}
        whileTap={VARIANTS.animateScreenBtn}
        cx="136.60733"
        cy="192.32963"
        rx="5.95043"
        ry="6.08304"
        fill="#3f3d56"
      />
      <motion.ellipse
        custom="#00CA4E"
        whileHover={VARIANTS.animateScreenBtn}
        whileTap={VARIANTS.animateScreenBtn}
        cx="157.16336"
        cy="192.32963"
        rx="5.95043"
        ry="6.08304"
        fill="#3f3d56"
      />
      <motion.g whileHover={{ scale: 1.2 }}>
        <path
          d="M548.20637,351.622h-14.6a1.1053,1.1053,0,0,0,0,2.21h14.6a1.10511,1.10511,0,0,0,0-2.21Z"
          transform="translate(-206.59003 -163.87113)"
          fill="#3f3d56"
        />
        <path
          d="M548.20637,355.772h-14.6a1.10527,1.10527,0,0,0,0,2.21h14.6a1.10508,1.10508,0,0,0,0-2.21Z"
          transform="translate(-206.59003 -163.87113)"
          fill="#3f3d56"
        />
        <path
          d="M548.20637,359.92194h-14.6a1.1053,1.1053,0,0,0,0,2.21h14.6a1.10511,1.10511,0,0,0,0-2.21Z"
          transform="translate(-206.59003 -163.87113)"
          fill="#3f3d56"
        />
      </motion.g>

      <motion.rect
        custom={0}
        initial={VARIANTS.hidden}
        animate={animation}
        x="209.38454"
        y="260.82713"
        width="50.71916"
        height="10.8457"
        rx="3.26417"
        fill="#6c63ff"
        style={{ fill: "var(--color-secondary)" }}
      />
      <motion.rect
        custom={1}
        initial={VARIANTS.hidden}
        animate={animation}
        x="183.62601"
        y="282.51852"
        width="102.23622"
        height="10.8457"
        rx="3.26417"
        fill="#e6e6e6"
      />
      <motion.rect
        custom={2}
        initial={VARIANTS.hidden}
        animate={animation}
        x="183.62601"
        y="304.20991"
        width="102.23622"
        height="10.8457"
        rx="3.26417"
        fill="#e6e6e6"
      />
    </g>
  );
}

export default DesktopScreen;
