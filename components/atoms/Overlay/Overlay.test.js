import Overlay from ".";
import "@testing-library/jest-dom";
import { fireEvent, render, screen } from "@testing-library/react";

describe("Overlay", () => {
  it("not renders  without passing props", () => {
    render(<Overlay />);
    // check if all components are rendered
    expect(screen.queryByTestId("overlay")).not.toBeInTheDocument();
  });

  it("not renders with passing addOverlay prop as false", () => {
    const props = {
      data: {
        addOverlay: false,
      },
    };

    render(<Overlay data={props.data} />);
    // check if all components are rendered
    expect(screen.queryByTestId("overlay")).not.toBeInTheDocument();
  });

  it("not renders with passing addOverlay prop as true", () => {
    const props = {
      data: {
        addOverlay: true,
      },
    };

    render(<Overlay data={props.data} />);
    // check if all components are rendered
    expect(screen.queryByTestId("overlay")).toBeInTheDocument();
  });
});
