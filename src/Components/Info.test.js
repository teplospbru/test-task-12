import { render, screen } from '@testing-library/react';
import { Provider } from 'react-redux';
import Info from './Info';
import store from '../store/store';

beforeEach(() => {
    render(<Provider store={ store }><Info /></Provider>)
});

describe('тестирум компонент Info', () => {
    test('рендерит компонент Info', () => {
        const div = screen.getByTestId('info');

        expect(div).toBeInTheDocument();
    });
    test('рендерит текст "начать игру"', () => {
        const text = screen.getByText(/начать игру/i);

        expect(text).toBeInTheDocument();
    });
    test('рендерит иконку', () => {
        const icon = screen.getByTestId('icon');

        expect(icon).toBeInTheDocument();
    });
});