import { render, screen } from '@testing-library/react';
import UserList from './UserList';

test('check number of rows', () => {
  const users = [
    {
      name: 'Biswajit Paul',
      email: 'ppapai.paul.1998@gmail.com',
    },
    {
      name: 'Jitu Bhai',
      email: 'ppapai844@yopmail.com',
    },
  ];

  const { container } = render(<UserList users={users} />);

  // eslint-disable-next-line
  const rows = container.querySelectorAll('tbody tr');

  expect(rows).toHaveLength(2);
});
