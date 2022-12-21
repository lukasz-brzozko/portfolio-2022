import { useLayoutEffect } from "react";

const NO_SCROLL_CLASSNAME = "ui-no-scroll";

export function useLockBodyScroll() {
  useLayoutEffect(() => {
    // Prevent scrolling on mount
    document.body.classList.add(NO_SCROLL_CLASSNAME);
    // Re-enable scrolling when component unmounts
    return () => document.body.classList.remove(NO_SCROLL_CLASSNAME);
  }, []); // Empty array ensures effect is only run on mount and unmount
}
