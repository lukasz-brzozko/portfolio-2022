import block from "bem-css-modules";

import styles from "./TextBlock.module.scss";

const b = block(styles);

function TextBlock({ data = null }) {
  if (data === null) return;

  const { title, titleTag = "h2", desc } = data;

  if (!title || !desc) return;

  // Create pseudo-component to use custom tag
  const TitleTag = titleTag;

  return (
    <div className={b()}>
      {title && <TitleTag className="title t-typo-h2">{title}</TitleTag>}
      {desc && <p className="t-typo-p1 ui-color--t-secondary">{desc}</p>}
    </div>
  );
}

export default TextBlock;
