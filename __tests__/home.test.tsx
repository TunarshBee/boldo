import "@testing-library/jest-dom";
import { render } from "@testing-library/react";
import { Home } from "@/src/components";

describe("Home", () => {
  // Renders the main blog section with correct layout and styles
  it("should render the main blog section with correct layout and styles", () => {
    const { getByText, getByAltText } = render(<Home />);
    expect(getByText("Blog")).toBeInTheDocument();
    expect(getByText("Thoughts and words")).toBeInTheDocument();
    expect(getByAltText("hero")).toBeInTheDocument();
    expect(getByText("Category")).toBeInTheDocument();
    expect(getByText("November 22, 2021")).toBeInTheDocument();
    expect(
      getByText("Pitch termsheet backing validation focus release.")
    ).toBeInTheDocument();
    expect(getByAltText("chandler bing")).toBeInTheDocument();
    expect(getByText("Chandler Bing")).toBeInTheDocument();
  });
});
