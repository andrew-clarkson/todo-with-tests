import { render, screen } from '@testing-library/react';
import App from './App';

describe('App Component', () => {
  test('renders "Add New List" as a button', () => {
    render(<App />);
    const addListButton = screen.getByText('Add New List');
    expect(addListButton).toBeInTheDocument();
  });
});
