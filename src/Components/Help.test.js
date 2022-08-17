import { render, screen } from '@testing-library/react';
import { Provider } from 'react-redux';
import Help from './Help';
import store from '../store/store';

beforeEach(() => {
    render(<Provider store={ store }><Help /></Provider>)
});

describe('тестирум компонент Help', () => {
    test('рендерит 2 заголовка', () => {
        const title = screen.getAllByRole('heading');

        expect(title.length).toBe(2);
    });
    test('рендерит текст "скорость"', () => {
        const text = screen.getByText(/скорость - 1/i);

        expect(text).toBeInTheDocument();
    });
    test('рендерит кнопку "сбросить прогресс"', () => {
        const btn = screen.getByTestId('reset');

        expect(btn).toBeInTheDocument();
    });
});