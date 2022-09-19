export const VARIANTS_NAMES = {
  visible: "visible",
  visibleBlock: "visibleBlock",
  hidden: "hidden",
};

export const variants = {
  [VARIANTS_NAMES.hidden]: { y: "4vh", opacity: 0 },
  [VARIANTS_NAMES.visible]: (i = 0) => ({
    y: 0,
    opacity: 1,
    transition: {
      delay: i * 0.1,
      type: "spring",
      damping: 10,
      mass: 0.7,
      stiffness: 180,
    },
  }),
};
