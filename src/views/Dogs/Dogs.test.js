import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import Dogs from './Dogs';

test('Dogs should display all dogs', async () => {
  const { container } = render(
    <MemoryRouter>
      <Dogs />
    </MemoryRouter>
  );
  await screen.findByText('Meet Barton');
  expect(container).toMatchSnapshot();
});
