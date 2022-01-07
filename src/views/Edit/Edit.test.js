import { render, screen } from '@testing-library/react';
import { MemoryRouter, Route } from 'react-router-dom/cjs/react-router-dom.min';
import Edit from './Edit';

test('Edit should display Edit details', async () => {
  const { container } = render(
    <MemoryRouter initialEntries={['/dogs/2']}>
      <Route path="/dogs/:id" component={Edit} />
    </MemoryRouter>
  );
  await screen.findByText('Breed');
  expect(container).toMatchSnapshot();
});

//putting this in to update on github
