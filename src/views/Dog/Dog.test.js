import { render, screen } from '@testing-library/react';
import { MemoryRouter, Route } from 'react-router-dom/cjs/react-router-dom.min';
import Dog from './Dog';

test('Edit should display Edit details', async () => {
  const { container } = render(
    <MemoryRouter initialEntries={['/dogs/2']}>
      <Route path="/dogs/:id" component={Dog} />
    </MemoryRouter>
  );
  await screen.findByText('Edit');
  expect(container).toMatchSnapshot();
});
