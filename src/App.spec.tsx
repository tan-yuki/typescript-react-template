import React from 'react';
import { App } from './App';
import { render } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';

describe('App', () => {
  it('should show hello world', () => {
    const { getByText } = render(<App />);
    expect(getByText(/Hello world/)).toBeInTheDocument();
  });
});
