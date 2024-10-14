import "@testing-library/jest-dom";
import { render } from "@testing-library/react";
import Home from "@/src/components/home/home";

describe('Home', () => {

    // Renders the Home component without errors
    it('should render the Home component without errors', () => {
      const { container } = render(<Home />);
      expect(container).toBeInTheDocument();
    });

});

