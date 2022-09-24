/* eslint-disable react/no-unknown-property */
/* eslint-disable react/display-name */
import { animations, motion, useAnimation } from "framer-motion";
import { useCallback, useState } from "react";

const transition = {
  type: "spring",
  damping: 3,
  velocity: 300,
  stiffness: 20,
  bounce: 200,
  mass: 0.1,
};

function Mug() {
  const animation = useAnimation();

  const [isAnimationFinished, setIsAnimationFinished] = useState(true);

  const animateMug = useCallback(async () => {
    if (!isAnimationFinished) return;

    setIsAnimationFinished(false);

    animation.start({
      translateY: ["0%", "-3%", "0%"],
      transition: { duration: 0.5 },
    });

    await animation.start({
      rotate: [0, -10, 10, -10, 10, 0],

      transition: {
        // repeat: 3,
        // repeatType: "mirror",
        duration: 0.5,
      },
    });

    setIsAnimationFinished(true);
  }, [isAnimationFinished, animation]);

  return (
    <motion.g
      onHoverStart={animateMug}
      whileTap={animateMug}
      animate={animation}
    >
      <path
        d="M900.18575,604.97238a6.41621,6.41621,0,0,0,6.1831,4.331l26.49183-.68178a6.3285,6.3285,0,0,0,5.98085-4.657l3.74888-40.08721a9.79409,9.79409,0,0,0,4.23793.87079,9.66133,9.66133,0,1,0-.4849-19.31658,8.18393,8.18393,0,0,0-1.73618.18056,6.54764,6.54764,0,0,0-4.87405-2.103l-40.75051,1.05229a5.85294,5.85294,0,0,0-1.00519.1248,6.36455,6.36455,0,0,0-4.87318,8.26464Zm43.17345-43.81684,2.66764-9.55274a6.50649,6.50649,0,0,0,.02036-3.37458c.12944-.00034.24363-.06169.37307-.062a6.91049,6.91049,0,0,1,.32357,13.81714A6.50527,6.50527,0,0,1,943.3592,561.15554Z"
        transform="translate(-206.59003 -163.87113)"
        fill="#2f2e41"
      />
      <path
        d="M897.97751,544.68623c.86818,4.96412,10.62909,8.45387,22.36585,7.84729,10.79271-.49726,19.61745-4.287,21.23421-8.7785a6.02511,6.02511,0,0,0-1.84436-.24588l-40.75051,1.05229A5.85294,5.85294,0,0,0,897.97751,544.68623Z"
        transform="translate(-206.59003 -163.87113)"
        fill="#3f3d56"
      />
      <path
        d="M922.49438,582.94415a.49659.49659,0,0,0,.15091-.06642l5.75315-3.76566a.49923.49923,0,0,0,.00032-.83621l-5.97978-3.91667a.49972.49972,0,1,0-.54792.83585l5.34091,3.49818-5.114,3.34794a.49991.49991,0,0,0,.39637.903Z"
        transform="translate(-206.59003 -163.87113)"
        fill="#6c63ff"
        style={{ fill: "var(--color-secondary)" }}
      />
      <path
        d="M913.40762,583.36319a.5.5,0,0,0,.12608-.91842l-5.30306-3.04034,5.1256-3.80723a.49963.49963,0,1,0-.596-.80208l-5.73862,4.26265a.49951.49951,0,0,0,.04918.83476l5.96525,3.41968A.4997.4997,0,0,0,913.40762,583.36319Z"
        transform="translate(-206.59003 -163.87113)"
        fill="#6c63ff"
        style={{ fill: "var(--color-secondary)" }}
      />
      <path
        d="M921.92215,586.24416a.48233.48233,0,0,0,.137-.05785.49976.49976,0,0,0,.16752-.68714l-8.15548-13.40836a.50026.50026,0,0,0-.85442.52058l8.15548,13.40835A.50035.50035,0,0,0,921.92215,586.24416Z"
        transform="translate(-206.59003 -163.87113)"
        fill="#6c63ff"
        style={{ fill: "var(--color-secondary)" }}
      />
    </motion.g>
  );
}

export default Mug;
