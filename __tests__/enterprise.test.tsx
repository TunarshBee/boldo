import { Enterprise } from "@/src/components";
import "@testing-library/jest-dom";
import { render } from "@testing-library/react";

describe('Enterprise', () => {
    // Renders the Enterprise component without errors
    it('should render the Enterprise component without errors', () => {
      const { container } = render(<Enterprise />);
      expect(container).toBeInTheDocument();
    });
});

