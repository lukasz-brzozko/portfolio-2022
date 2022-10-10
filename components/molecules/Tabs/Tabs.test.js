import "@testing-library/jest-dom";
import { fireEvent, render, screen } from "@testing-library/react";
import block from "bem-css-modules";

import Tabs from "./index";
import styles from "./Tabs.module.scss";

const b = block(styles);

const data = [
  { id: 0, tabName: "test", tabContent: "hello" },
  { id: 1, tabName: "test2", tabContent: "hello2" },
];

describe("Tabs", () => {
  it("the last data item is the first tab and has an active class", () => {
    const props = { data };
    const [firstTab] = data;

    render(<Tabs data={props.data} />);

    // check if all components are rendered
    expect(screen.queryByTestId(firstTab.id).dataset.active).toEqual("true");
  });

  it("the second tab has an active class after clicking on it", () => {
    const props = { data };
    const [, secondTab] = data;

    const { getByText } = render(<Tabs data={props.data} />);

    fireEvent.click(getByText(secondTab.tabName));

    expect(screen.queryByTestId(secondTab.id).dataset.active).toEqual("true");
  });
});
