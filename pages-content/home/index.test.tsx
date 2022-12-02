import '@testing-library/jest-dom/extend-expect';
import { render, screen } from '@testing-library/react';
import { HomePageContent } from './index';

test('HomePageContent', () => {
  render(<HomePageContent />);

  const testText = screen.getByText('test');
  expect(testText).toBeInTheDocument();
});
