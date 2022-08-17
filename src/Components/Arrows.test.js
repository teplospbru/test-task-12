import { render, screen } from '@testing-library/react';
import { Provider } from 'react-redux';
import Arrows from './Arrows';
import store from '../store/store';

beforeEach(() => {
    render(<Provider store={ store }><Arrows /></Provider>)
});

describe('тестирум компонент Arrows', () => {
    test('рендерит 10 квадратов под стрелки', () => {
        const boxes = screen.getAllByTestId('arrow-box');

        expect(boxes.length).toBe(10);
    });
})