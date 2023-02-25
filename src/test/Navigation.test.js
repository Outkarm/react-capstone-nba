import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { render } from '@testing-library/react';
import Navigation from '../components/Navigation';

describe('Navigation', () => {
  it('renders the title correctly', () => {
    const { getByText } = render(
      <Router>
        <Navigation />
      </Router>,
    );
    expect(getByText('NBA Information')).toBeInTheDocument();
  });
});
