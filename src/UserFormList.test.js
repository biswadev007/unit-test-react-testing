import { render, screen } from '@testing-library/react';
import UserList from './UserList';

const renderCommonComp = () => {
  const users = [
    {
      name: 'Jack',
      email: 'jack@jack.com',
    },
    {
      name: 'Jill',
      email: 'jill@jill.com',
    },
  ];
  const { container } = render(<UserList users={users} />);

  return {
    container,
    users,
  };
};
test('check number of rows', () => {
  const { container } = renderCommonComp();

  // eslint-disable-next-line
  const rows = container.querySelectorAll('tbody tr');

  expect(rows).toHaveLength(2);
});

test('render with proper data', () => {
  const { users } = renderCommonComp();

  for (let user of users) {
    const name = screen.getByRole('cell', { name: user.name });
    const email = screen.getByRole('cell', { name: user.email });

    expect(name).toBeInTheDocument();
    expect(email).toBeInTheDocument();
  }
});
