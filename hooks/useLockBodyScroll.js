import { useLayoutEffect } from "react";

export function useLockBodyScroll() {
  useLayoutEffect(() => {
    // Prevent scrolling on mount
    document.body.classList.add("ui-no-scroll");
    // Re-enable scrolling when component unmounts
    return () => document.body.classList.remove("ui-no-scroll");
  }, []); // Empty array ensures effect is only run on mount and unmount
}
