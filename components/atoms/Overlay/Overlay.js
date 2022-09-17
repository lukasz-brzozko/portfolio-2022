import block from "bem-css-modules";

import styles from "./Overlay.module.scss";

const b = block(styles);

function Overlay({ data = null }) {
  if (data === null) return;

  const { addOverlay, color, gradient } = data;

  if (addOverlay === false) return;

  const inlineStyles = { "--color": color, "--gradient": gradient };

  return <div className={b()} style={inlineStyles} data-testid="overlay"></div>;
}
export default Overlay;
