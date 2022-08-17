import { render, screen } from '@testing-library/react';
import { Provider } from 'react-redux';
import Field from './Field';
import store from '../store/store';

beforeEach(() => {
    render(<Provider store={ store }><Field /></Provider>)
});

describe('тестирум компонент Field', () => {
    test('рендерит 9 квадратов игрового поля', () => {
        const boxes = screen.getAllByTestId('field');

        expect(boxes.length).toBe(9);
    });
})