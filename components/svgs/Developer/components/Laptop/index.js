/* eslint-disable react/no-unknown-property */
/* eslint-disable react/display-name */
import { animations, motion, useAnimation } from "framer-motion";
import { useCallback, useContext, useEffect, useState } from "react";

import { DeveloperContext } from "../../index";

function Laptop() {
  const isSVGInView = useContext(DeveloperContext);
  const animation = useAnimation();

  const [isAnimationInitiated, setIsAnimationInitiated] = useState(false);
  const [isAnimationRunning, setIsAnimationRunning] = useState(false);

  const VARIANTS = {
    initial: {
      translateX: "0%",
      transition: { duration: 0 },
    },

    hover: {
      scale: 1.25,
    },
  };

  const animateLine = useCallback(async () => {
    await animation.start((i = 0) => {
      const translateVal = Math.random() >= 0.5 ? 0.25 : -0.25;
      const firstTranslateVal = `${translateVal}%`;
      const secondTranslateVal = `${translateVal * -1}%`;

      return {
        translateX: ["0%", firstTranslateVal, "0%", secondTranslateVal, "0%"],
        transition: {
          delay: Math.random(),
          repeat: Infinity,
          duration: 3,
          ease: "linear",
        },
      };
    });
  }, [animation]);

  useEffect(() => {
    console.log({ isAnimationInitiated, isSVGInView, isAnimationRunning });

    if (isAnimationInitiated && !isSVGInView) {
      animation.stop();
      animation.set({ translateX: "0%", transition: { duration: 0 } });
      // animation.set(VARIANTS.initial);

      setIsAnimationRunning(false);
    } else if (!isAnimationInitiated && isSVGInView) {
      animateLine();

      setIsAnimationInitiated(true);
      setIsAnimationRunning(true);
    } else if (isAnimationInitiated && isSVGInView) {
      if (!isAnimationRunning) {
        animateLine();

        setIsAnimationRunning(true);
      }
    }
  }, [
    animation,
    animateLine,
    isAnimationInitiated,
    isAnimationRunning,
    isSVGInView,
  ]);

  return (
    <motion.g className="laptop">
      <path
        className="laptop-top"
        d="M702.01993,505.46245v85.704a4.12233,4.12233,0,0,0,4.11906,4.11907H833.14348a4.12232,4.12232,0,0,0,4.11907-4.11907v-85.704a4.12433,4.12433,0,0,0-4.11907-4.11452H706.139A4.12434,4.12434,0,0,0,702.01993,505.46245Z"
        transform="translate(-206.59003 -163.87113)"
        fill="#3f3d56"
      />
      <path
        className="laptop-screen"
        d="M704.99939,506.52881V590.1092a2.20523,2.20523,0,0,0,2.20141,2.20141H832.08626a2.20522,2.20522,0,0,0,2.20141-2.20141V506.52881a2.20621,2.20621,0,0,0-2.20141-2.206H707.2008A2.20623,2.20623,0,0,0,704.99939,506.52881Z"
        transform="translate(-206.59003 -163.87113)"
        fill="#6c63ff"
        style={{ fill: "var(--color-secondary)" }}
      />
      <g className="laptop-keyboard">
        <path
          d="M699.36376,607.881a2.46985,2.46985,0,0,0,1.94346.92984H837.29917a2.5024,2.5024,0,0,0,2.44606-3.0157l-2.111-10.02722a2.50694,2.50694,0,0,0-1.55811-1.81784,2.42467,2.42467,0,0,0-.888-.1675H703.40985a2.42446,2.42446,0,0,0-.888.1675,2.50671,2.50671,0,0,0-1.55811,1.81784l-2.111,10.02722A2.5005,2.5005,0,0,0,699.36376,607.881Z"
          transform="translate(-206.59003 -163.87113)"
          fill="#2f2e41"
        />
        <rect
          x="830.03379"
          y="595.58843"
          width="4.18849"
          height="2.51309"
          rx="0.48819"
          transform="translate(1457.66604 1029.81882) rotate(-180)"
          fill="#3f3d56"
        />
        <rect
          x="821.65681"
          y="595.58843"
          width="4.18849"
          height="2.51309"
          rx="0.48819"
          transform="translate(1440.91208 1029.81882) rotate(-180)"
          fill="#3f3d56"
        />
        <rect
          x="813.27982"
          y="595.58843"
          width="4.18849"
          height="2.51309"
          rx="0.48819"
          transform="translate(1424.15811 1029.81882) rotate(-180)"
          fill="#3f3d56"
        />
        <rect
          x="804.90284"
          y="595.58843"
          width="4.18849"
          height="2.51309"
          rx="0.48819"
          transform="translate(1407.40415 1029.81882) rotate(-180)"
          fill="#3f3d56"
        />
        <rect
          x="796.52586"
          y="595.58843"
          width="4.18849"
          height="2.51309"
          rx="0.48819"
          transform="translate(1390.65018 1029.81882) rotate(-180)"
          fill="#3f3d56"
        />
        <rect
          x="788.14888"
          y="595.58843"
          width="4.18849"
          height="2.51309"
          rx="0.48819"
          transform="translate(1373.89622 1029.81882) rotate(-180)"
          fill="#3f3d56"
        />
        <rect
          x="779.7719"
          y="595.58843"
          width="4.18849"
          height="2.51309"
          rx="0.48819"
          transform="translate(1357.14226 1029.81882) rotate(-180)"
          fill="#3f3d56"
        />
        <rect
          x="771.39491"
          y="595.58843"
          width="4.18849"
          height="2.51309"
          rx="0.48819"
          transform="translate(1340.38829 1029.81882) rotate(-180)"
          fill="#3f3d56"
        />
        <rect
          x="763.01793"
          y="595.58843"
          width="4.18849"
          height="2.51309"
          rx="0.48819"
          transform="translate(1323.63433 1029.81882) rotate(-180)"
          fill="#3f3d56"
        />
        <rect
          x="754.64095"
          y="595.58843"
          width="4.18849"
          height="2.51309"
          rx="0.48819"
          transform="translate(1306.88037 1029.81882) rotate(-180)"
          fill="#3f3d56"
        />
        <rect
          x="746.26397"
          y="595.58843"
          width="4.18849"
          height="2.51309"
          rx="0.48819"
          transform="translate(1290.1264 1029.81882) rotate(-180)"
          fill="#3f3d56"
        />
        <rect
          x="737.88699"
          y="595.58843"
          width="4.18849"
          height="2.51309"
          rx="0.48819"
          transform="translate(1273.37244 1029.81882) rotate(-180)"
          fill="#3f3d56"
        />
        <rect
          x="729.51001"
          y="595.58843"
          width="4.18849"
          height="2.51309"
          rx="0.48819"
          transform="translate(1256.61847 1029.81882) rotate(-180)"
          fill="#3f3d56"
        />
        <rect
          x="721.13302"
          y="595.58843"
          width="4.18849"
          height="2.51309"
          rx="0.48819"
          transform="translate(1239.86451 1029.81882) rotate(-180)"
          fill="#3f3d56"
        />
        <rect
          x="712.75604"
          y="595.58843"
          width="4.18849"
          height="2.51309"
          rx="0.48819"
          transform="translate(1223.11055 1029.81882) rotate(-180)"
          fill="#3f3d56"
        />
        <rect
          x="704.37906"
          y="595.58843"
          width="4.18849"
          height="2.51309"
          rx="0.48819"
          transform="translate(1206.35658 1029.81882) rotate(-180)"
          fill="#3f3d56"
        />
        <rect
          x="830.13277"
          y="599.77692"
          width="4.18849"
          height="2.51309"
          rx="0.48819"
          transform="translate(1457.86401 1038.1958) rotate(-180)"
          fill="#3f3d56"
        />
        <rect
          x="821.75579"
          y="599.77692"
          width="4.18849"
          height="2.51309"
          rx="0.48819"
          transform="translate(1441.11005 1038.1958) rotate(-180)"
          fill="#3f3d56"
        />
        <rect
          x="813.37881"
          y="599.77692"
          width="4.18849"
          height="2.51309"
          rx="0.48819"
          transform="translate(1424.35608 1038.1958) rotate(-180)"
          fill="#3f3d56"
        />
        <rect
          x="805.00183"
          y="599.77692"
          width="4.18849"
          height="2.51309"
          rx="0.48819"
          transform="translate(1407.60212 1038.1958) rotate(-180)"
          fill="#3f3d56"
        />
        <rect
          x="796.62485"
          y="599.77692"
          width="4.18849"
          height="2.51309"
          rx="0.48819"
          transform="translate(1390.84816 1038.1958) rotate(-180)"
          fill="#3f3d56"
        />
        <rect
          x="788.24786"
          y="599.77692"
          width="4.18849"
          height="2.51309"
          rx="0.48819"
          transform="translate(1374.09419 1038.1958) rotate(-180)"
          fill="#3f3d56"
        />
        <rect
          x="779.87088"
          y="599.77692"
          width="4.18849"
          height="2.51309"
          rx="0.48819"
          transform="translate(1357.34023 1038.1958) rotate(-180)"
          fill="#3f3d56"
        />
        <rect
          x="771.4939"
          y="599.77692"
          width="4.18849"
          height="2.51309"
          rx="0.48819"
          transform="translate(1340.58627 1038.1958) rotate(-180)"
          fill="#3f3d56"
        />
        <rect
          x="763.11692"
          y="599.77692"
          width="4.18849"
          height="2.51309"
          rx="0.48819"
          transform="translate(1323.8323 1038.1958) rotate(-180)"
          fill="#3f3d56"
        />
        <rect
          x="754.73994"
          y="599.77692"
          width="4.18849"
          height="2.51309"
          rx="0.48819"
          transform="translate(1307.07834 1038.1958) rotate(-180)"
          fill="#3f3d56"
        />
        <rect
          x="746.36295"
          y="599.77692"
          width="4.18849"
          height="2.51309"
          rx="0.48819"
          transform="translate(1290.32437 1038.1958) rotate(-180)"
          fill="#3f3d56"
        />
        <rect
          x="737.98597"
          y="599.77692"
          width="4.18849"
          height="2.51309"
          rx="0.48819"
          transform="translate(1273.57041 1038.1958) rotate(-180)"
          fill="#3f3d56"
        />
        <rect
          x="729.60899"
          y="599.77692"
          width="4.18849"
          height="2.51309"
          rx="0.48819"
          transform="translate(1256.81645 1038.1958) rotate(-180)"
          fill="#3f3d56"
        />
        <rect
          x="721.23201"
          y="599.77692"
          width="4.18849"
          height="2.51309"
          rx="0.48819"
          transform="translate(1240.06248 1038.1958) rotate(-180)"
          fill="#3f3d56"
        />
        <rect
          x="712.85503"
          y="599.77692"
          width="4.18849"
          height="2.51309"
          rx="0.48819"
          transform="translate(1223.30852 1038.1958) rotate(-180)"
          fill="#3f3d56"
        />
        <rect
          x="704.47805"
          y="599.77692"
          width="4.18849"
          height="2.51309"
          rx="0.48819"
          transform="translate(1206.55456 1038.1958) rotate(-180)"
          fill="#3f3d56"
        />
        <rect
          x="760.60382"
          y="604.80311"
          width="33.50793"
          height="2.51309"
          rx="0.48819"
          transform="translate(1348.12555 1048.24818) rotate(-180)"
          fill="#3f3d56"
        />
      </g>
      <motion.g
        className="laptop-screen-line-1"
        animate={animation}
        whileHover={VARIANTS.hover}
      >
        <rect
          x="515.63106"
          y="358.73707"
          width="5.96585"
          height="3.12216"
          rx="1.56108"
          fill="#fff"
        />
        <rect
          x="548.15407"
          y="358.73707"
          width="5.96585"
          height="3.12216"
          rx="1.56108"
          fill="#fff"
        />
        <rect
          x="557.36892"
          y="358.73707"
          width="5.96585"
          height="3.12216"
          rx="1.56108"
          fill="#fff"
        />
        <rect
          x="524.47742"
          y="358.4768"
          width="20.79613"
          height="3.12216"
          rx="1.56108"
          fill="#fff"
        />
        <rect
          x="567.84144"
          y="358.4768"
          width="20.79613"
          height="3.12216"
          rx="1.56108"
          fill="#fff"
        />
      </motion.g>
      <motion.g
        className="laptop-screen-line-2"
        animate={animation}
        whileHover={VARIANTS.hover}
      >
        <rect
          x="524.30386"
          y="365.78373"
          width="5.96585"
          height="3.12216"
          rx="1.56108"
          fill="#fff"
        />
        <rect
          x="556.82687"
          y="365.78373"
          width="5.96585"
          height="3.12216"
          rx="1.56108"
          fill="#fff"
        />
        <rect
          x="566.04172"
          y="365.78373"
          width="5.96585"
          height="3.12216"
          rx="1.56108"
          fill="#fff"
        />
        <rect
          x="533.15023"
          y="365.52345"
          width="20.79613"
          height="3.12216"
          rx="1.56108"
          fill="#fff"
        />
        <rect
          x="576.51424"
          y="365.52345"
          width="20.79613"
          height="3.12216"
          rx="1.56108"
          fill="#fff"
        />
      </motion.g>
      <motion.g
        className="laptop-screen-line-3"
        animate={animation}
        whileHover={VARIANTS.hover}
      >
        <rect
          x="532.97666"
          y="372.83038"
          width="5.96585"
          height="3.12216"
          rx="1.56108"
          fill="#fff"
        />
        <rect
          x="565.49967"
          y="372.83038"
          width="5.96585"
          height="3.12216"
          rx="1.56108"
          fill="#fff"
        />
        <rect
          x="574.71453"
          y="372.83038"
          width="5.96585"
          height="3.12216"
          rx="1.56108"
          fill="#fff"
        />
        <rect
          x="541.82303"
          y="372.57011"
          width="20.79613"
          height="3.12216"
          rx="1.56108"
          fill="#fff"
        />
        <rect
          x="585.18704"
          y="372.57011"
          width="20.79613"
          height="3.12216"
          rx="1.56108"
          fill="#fff"
        />
      </motion.g>
      <motion.g
        className="laptop-screen-line-4"
        animate={animation}
        whileHover={VARIANTS.hover}
      >
        <rect
          x="541.64947"
          y="379.87703"
          width="5.96585"
          height="3.12216"
          rx="1.56108"
          fill="#fff"
        />
        <rect
          x="574.17248"
          y="379.87703"
          width="5.96585"
          height="3.12216"
          rx="1.56108"
          fill="#fff"
        />
        <rect
          x="583.38733"
          y="379.87703"
          width="5.96585"
          height="3.12216"
          rx="1.56108"
          fill="#fff"
        />
        <rect
          x="550.49583"
          y="379.61676"
          width="20.79613"
          height="3.12216"
          rx="1.56108"
          fill="#fff"
        />
      </motion.g>
      <motion.g
        className="laptop-screen-line-5"
        animate={animation}
        whileHover={VARIANTS.hover}
      >
        <rect
          x="541.64947"
          y="386.75755"
          width="5.96585"
          height="3.12216"
          rx="1.56108"
          fill="#fff"
        />
        <rect
          x="574.17248"
          y="386.75755"
          width="5.96585"
          height="3.12216"
          rx="1.56108"
          fill="#fff"
        />
        <rect
          x="583.38733"
          y="386.75755"
          width="5.96585"
          height="3.12216"
          rx="1.56108"
          fill="#fff"
        />
        <rect
          x="550.49583"
          y="387.01783"
          width="20.79613"
          height="3.12216"
          rx="1.56108"
          fill="#fff"
        />
      </motion.g>
      <motion.g
        className="laptop-screen-line-6"
        animate={animation}
        whileHover={VARIANTS.hover}
      >
        <rect
          x="541.82303"
          y="394.06448"
          width="20.79613"
          height="3.12216"
          rx="1.56108"
          fill="#fff"
        />
        <rect
          x="532.97666"
          y="393.80421"
          width="5.96585"
          height="3.12216"
          rx="1.56108"
          fill="#fff"
        />
        <rect
          x="565.49967"
          y="393.80421"
          width="5.96585"
          height="3.12216"
          rx="1.56108"
          fill="#fff"
        />
        <rect
          x="574.71453"
          y="393.80421"
          width="5.96585"
          height="3.12216"
          rx="1.56108"
          fill="#fff"
        />
      </motion.g>
      <motion.g
        className="laptop-screen-line-7"
        animate={animation}
        whileHover={VARIANTS.hover}
      >
        <rect
          x="524.30386"
          y="400.85086"
          width="5.96585"
          height="3.12216"
          rx="1.56108"
          fill="#fff"
        />
        <rect
          x="533.15023"
          y="401.11113"
          width="20.79613"
          height="3.12216"
          rx="1.56108"
          fill="#fff"
        />
        <rect
          x="556.82687"
          y="400.85086"
          width="5.96585"
          height="3.12216"
          rx="1.56108"
          fill="#fff"
        />
        <rect
          x="566.04172"
          y="400.85086"
          width="5.96585"
          height="3.12216"
          rx="1.56108"
          fill="#fff"
        />
      </motion.g>
      <motion.g
        className="laptop-screen-line-8"
        animate={animation}
        whileHover={VARIANTS.hover}
      >
        <rect
          x="548.15407"
          y="407.89751"
          width="5.96585"
          height="3.12216"
          rx="1.56108"
          fill="#fff"
        />
        <rect
          x="524.47742"
          y="408.15779"
          width="20.79613"
          height="3.12216"
          rx="1.56108"
          fill="#fff"
        />
        <rect
          x="557.36892"
          y="407.89751"
          width="5.96585"
          height="3.12216"
          rx="1.56108"
          fill="#fff"
        />
        <rect
          x="567.84144"
          y="408.15779"
          width="20.79613"
          height="3.12216"
          rx="1.56108"
          fill="#fff"
        />
        <rect
          x="515.63106"
          y="407.89751"
          width="5.96585"
          height="3.12216"
          rx="1.56108"
          fill="#fff"
        />
      </motion.g>
    </motion.g>
  );
}

export default Laptop;
