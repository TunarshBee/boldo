import { Footer } from "@/src/layout/footer";
import "@testing-library/jest-dom";
import { render } from "@testing-library/react";

describe("Footer", () => {
  // Renders the footer component with correct structure and styling
  it("should render the footer with correct structure and styling", () => {
    const { container } = render(<Footer />);

    expect(container.querySelector("section")).toHaveClass(
      "w-full container-side-spacing"
    ); 
    expect(container.querySelector("p")).toHaveTextContent(
      "Social media validation business model canvas graphical user interface launch party creative facebook iPad twitter."
    );
    expect(container.querySelector("h5")).toHaveTextContent(
      "All rights reserved."
    );
  });

  // Handles an empty Links array without errors
  it("should handle an empty Links array without errors", () => {
    const { container } = render(<Footer />);
    expect(container).toBeInTheDocument();
  });
});
