import { render, screen } from '@testing-library/react';
import Dog from './Dog';

test('dog should display dog details', async () => {
  const { container } = render(<Dog match={{ params: { id: 2 } }} />);
  await screen.findByText('Amely');
  expect(container).toMatchSnapshot();
});
