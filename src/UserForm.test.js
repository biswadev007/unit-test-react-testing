import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import UserForm from './UserForm';

test('shows two inputs and a button', () => {
  render(<UserForm />);

  const inputs = screen.getAllByRole('textbox');
  const button = screen.getByRole('button');

  expect(inputs).toHaveLength(2);
  expect(button).toBeInTheDocument();
});

test('it will check the form value and passes on submit of form', () => {
  // NOT THE BEST IMPLEMENTATION
  const { email, name } = {
    name: 'Biswa',
    email: 'biswa@yopmail.com'
  };
  
  const mock = jest.fn();

  render(<UserForm onUserAdd={mock} />);

  // const [nameInput, emailInput] = screen.getAllByRole('textbox');
  const nameInput = screen.getByRole('textbox', {
    name: /name/i
  });
  const emailInput = screen.getByRole('textbox', {
    name: /email/i
  });

  userEvent.click(nameInput);
  userEvent.keyboard(name);

  userEvent.click(emailInput);
  userEvent.keyboard(email);

  const button = screen.getByRole('button');
  userEvent.click(button);

  expect(mock).toHaveBeenCalled();
  expect(mock).toHaveBeenCalledWith({ name, email });
});