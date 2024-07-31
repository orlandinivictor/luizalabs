import { describe, expect, it, vi } from "vitest";
import { render, fireEvent, screen } from "@testing-library/react";
import renderer from "react-test-renderer";

import { Header } from ".";

describe("Header Tests", () => {
  it("match snapshot", () => {
    const navigate = vi.fn();
    const domTree = renderer.create(<Header navigate={navigate} />).toJSON();

    expect(domTree).toMatchSnapshot();
  });

  it("should be call navigate function", () => {
    const navigate = vi.fn();

    render(<Header navigate={navigate} />);
    fireEvent.click(screen.getByText("Wishlist"));

    expect(navigate).toBeCalled();
    expect(navigate).toBeCalledWith("/wishlist");
  });
});
