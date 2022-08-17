import { render, screen } from '@testing-library/react';
import { Provider } from 'react-redux';
import store from './store/store';
import App from './App';

test('рендерит App', () => {
  render(<Provider store={ store }><App /></Provider>);
  const linkElement = screen.getByText(/лабиринт/i);

  expect(linkElement).toBeInTheDocument();
});
