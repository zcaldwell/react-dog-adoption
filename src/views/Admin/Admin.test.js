import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import Admin from './Admin';

test('Dogs should display all dogs', async () => {
  const { container } = render(
    <MemoryRouter>
      <Admin />
    </MemoryRouter>
  );
  await screen.findByText('Name');
  expect(container).toMatchSnapshot();
});
