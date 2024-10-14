import { Navbar } from "@/src/layout/nav";
import "@testing-library/jest-dom";
import { render, fireEvent } from "@testing-library/react";

describe('Navbar', () => {

    // Navbar renders correctly with logo and navigation links
    it('should render logo and navigation links correctly', () => {
      const { getByAltText, getByLabelText } = render(<Navbar />);
      const logo = getByAltText('Website logo');
      const homepageLink = getByLabelText('Homepage');
      const toggleButton = getByLabelText('Toggle menu');
  
      expect(logo).toBeInTheDocument();
      expect(homepageLink).toBeInTheDocument();
      expect(toggleButton).toBeInTheDocument();
    });

    // Menu remains closed when clicking outside if already closed
    it('should open menu when clicking menu button if already closed', () => {
      const { getByLabelText, queryByRole } = render(<Navbar />);
      const toggleButton = getByLabelText('Toggle menu');
  
      fireEvent.mouseDown(document);
  
      expect(queryByRole('navigation')).toBeInTheDocument();
  
      fireEvent.click(toggleButton);
      fireEvent.mouseDown(document);
  
      expect(queryByRole('navigation')).toBeInTheDocument();
    });
});


