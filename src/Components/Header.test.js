import { render, screen } from '@testing-library/react';
import { Provider } from 'react-redux';
import Header from './Header';
import store from '../store/store';

beforeEach(() => {
    render(<Provider store={ store }><Header /></Provider>)
});

describe('тестирум компонент Header', () => {
    test('рендерит заголовок', () => {
        const title = screen.getByText(/лабиринт/i);

        expect(title).toBeInTheDocument();
    });
    test('рендерит кнопку "help"', () => {
        const btn = screen.getByTestId('help-btn');

        expect(btn).toBeInTheDocument();
    });
});