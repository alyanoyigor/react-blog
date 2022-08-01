import React from 'react';
import { render } from '@testing-library/react';
import { AuthorInfo } from './AuthorInfo';

describe('Author Info', () => {
  test('should render AuthorInfo', () => {
    const { container } = render(<AuthorInfo />);
    expect(container).toBeInTheDocument();
  });

  test('should match to snapshot', () => {
    const { container } = render(<AuthorInfo />);
    expect(container).toMatchSnapshot();
  });
});
