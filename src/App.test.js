import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import App from './App';

test('find input type in input and render data in table', () => {
  const { email, name } = {
    name: 'Biswajit',
    email: 'biswa123@yopmail.com'
  };
  render(<App />);

  const nameInput = screen.getByRole('textbox', { name: /name/i });
  const emailInput = screen.getByRole('textbox', { name: /email/i });

  userEvent.click(nameInput);
  userEvent.keyboard(name);

  userEvent.click(emailInput);
  userEvent.keyboard(email);

  const button = screen.getByRole('button', { name: /add user/i });
  userEvent.click(button);

  const nameCell = screen.getByRole('cell', { name });
  const emailCell = screen.getByRole('cell', { name: email });

  expect(nameCell).toBeInTheDocument();
  expect(emailCell).toBeInTheDocument();
});
