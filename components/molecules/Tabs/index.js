import block from "bem-css-modules";
import { motion } from "framer-motion";
import { useEffect, useRef, useState } from "react";

import { BREAKPOINTS } from "../../../constants/breakpoints";

import styles from "./Tabs.module.scss";

const b = block(styles);

const VARIANTS = {
  tabInitial: {
    color: "var(--color-t-primary)",
    "--after-bgc": "var(--color-t-secondary)",
  },
  tabActive: {
    color: "var(--color-secondary)",
    "--after-bgc": "var(--color-secondary)",
  },

  contentInitial: { opacity: 0, y: 10 },
  contentActive: { opacity: 1, y: 0 },
};

const TRANSITIONS = {
  content: {
    duration: 0.6,
    type: "spring",
    bounce: 4,
    damping: 5,
    velocity: 10,
    mass: 0.3,
    opacity: {
      type: "ease",
      duration: 0.2,
    },
  },
};

function Tabs({ data = null, inner }) {
  const [activeTabID, setActiveTabID] = useState(null);
  const tabNameList = useRef(null);

  useEffect(() => {
    const { current: innerEl } = inner;
    const { paddingLeft } = getComputedStyle(innerEl);

    const paddingLeftParsed = parseInt(paddingLeft, 10);
  }, [inner]);

  const scrollTabNameList = (clickedTab) => {
    if (window.innerWidth >= BREAKPOINTS.tablet) return;

    const { current: container } = tabNameList;
    const { scrollLeft: containerScrollX } = container;
    const { current: innerEl } = inner;

    const { left: clickedTabLeft } = clickedTab.getBoundingClientRect();
    const { left: containerLeft } = container.getBoundingClientRect();

    const { paddingLeft } = getComputedStyle(innerEl);

    const paddingLeftParsed = parseInt(paddingLeft, 10);

    container.scrollTo({
      left:
        containerScrollX + clickedTabLeft - containerLeft - paddingLeftParsed,
      behavior: "smooth",
    });
  };

  const handleBtnClick = ({ currentTarget }) => {
    const clickedID = parseInt(currentTarget.dataset.id, 10);

    setActiveTabID(clickedID);
    scrollTabNameList(currentTarget);
  };

  useEffect(() => {
    const [firstTab] = data;
    const firstTabID = firstTab.id;

    setActiveTabID(firstTabID);
  }, [data]);

  const tabNames = data.map(({ id, tabName }) => {
    const isActive = id === activeTabID;

    return (
      <li className={`${b("tab-name")}`} key={id}>
        <motion.button
          onClick={handleBtnClick}
          type="button"
          className={`${b("btn", {
            active: isActive,
          })} t-typo-h5 ui-relative ui-color--t-primary`}
          data-id={id}
          variants={VARIANTS}
          initial="tabInitial"
          animate={isActive ? "tabActive" : "tabInitial"}
          transition={{ duration: 0.5, type: "spring" }}
        >
          {tabName}
        </motion.button>
      </li>
    );
  });

  const tabContents = data.map(({ id, tabContent }) => {
    const isActive = id === activeTabID;

    const tabContentEl = (
      <motion.div
        className={`${b("tab-content")} t-typo-p2 ui-color--t-secondary`}
        key={id}
        variants={VARIANTS}
        initial="contentInitial"
        animate="contentActive"
        transition={TRANSITIONS.content}
        dangerouslySetInnerHTML={{ __html: tabContent }}
      ></motion.div>
    );

    return isActive && tabContentEl;
  });

  return (
    <div className={b()}>
      {/* Tabs */}
      <ul
        className={`${b("tab-names-container")} ui-hide-scrollbar ui-list`}
        ref={tabNameList}
      >
        {tabNames}
      </ul>

      {/* Tab content */}
      <div className={`${b("tab-contents-container")} ui-list`}>
        {tabContents}
      </div>
    </div>
  );
}

export default Tabs;
