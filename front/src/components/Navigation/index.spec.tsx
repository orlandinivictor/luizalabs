import { describe, expect, it, vi } from "vitest";
import { render, fireEvent, screen } from "@testing-library/react";
import renderer from "react-test-renderer";

import { Navigation } from ".";

describe("Navigation Tests", () => {
  it("match snapshot", () => {
    const navigate = vi.fn();

    const domTree = renderer
      .create(<Navigation navigate={navigate} />)
      .toJSON();

    expect(domTree).toMatchSnapshot();
  });

  it("should be call navigate function", () => {
    const navigate = vi.fn();

    render(<Navigation navigate={navigate} pathname="wishlist" />);
    fireEvent.click(screen.getByText("Home"));

    expect(navigate).toBeCalled();
    expect(navigate).toBeCalledWith("/home");
  });
});
