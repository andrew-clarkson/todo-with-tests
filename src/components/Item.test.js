import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import Item from './Item';

describe('Item Component', () => {
  test('renders input box with check, removes edit, check and delete button if edit button was clicked', () => {
    //Arrange
    render(<Item item='wash car' />);

    ///Act
    let editButton = screen.queryByTestId('edit');
    userEvent.click(editButton);

    //Assert

    editButton = screen.queryByTestId('edit');
    const deleteButton = screen.queryByTestId('delete');
    const checkButton = screen.queryByTestId('check');
    const sendEditButton = screen.queryByTestId('sendEdit');
    const input = screen.getByRole('textbox');

    expect(editButton).toBeNull();
    expect(deleteButton).toBeNull();
    expect(checkButton).toBeNull();
    expect(sendEditButton).toBeInTheDocument();
    expect(input).toBeInTheDocument();
  });
});
