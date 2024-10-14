import { News } from "@/src/components";
import { NewsData } from "@/src/components/news/News.constants";
import "@testing-library/jest-dom";
import { render } from "@testing-library/react";

describe('News', () => {
    // Renders the News component with a section containing news articles
    it('should render news articles when NewsData is provided', () => {
      const { getByText } = render(<News />);
      expect(getByText('Latest News')).toBeInTheDocument();
      expect(getByText('Load more')).toBeInTheDocument();
      expect(document.querySelectorAll('.grid > div').length).toBe(NewsData.length);
    });

    // Handles an empty NewsData array without errors
    it('should handle empty NewsData array without errors', () => {
      const originalNewsData = [...NewsData];
      NewsData.length = 0; // Empty the array
      const { getByText } = render(<News />);
      expect(getByText('Latest News')).toBeInTheDocument();
      expect(getByText('Load more')).toBeInTheDocument();
      expect(document.querySelectorAll('.grid > div').length).toBe(0);
      NewsData.push(...originalNewsData); // Restore original data
    });
});
