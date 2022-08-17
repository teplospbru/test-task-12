import { getArrow, getArrows, getPadTime, getProgress, getRandom } from './api';

describe('тестируем api', () => {
    test('получаем случайное число от 1 до 9', () => {
        const random = getRandom(1,9);

        expect(random).toBeGreaterThanOrEqual(1);
        expect(random).toBeLessThanOrEqual(9);
    });
    test('получаем случайный ход', () => {
        const move = getArrow(1);
        console.log('Описание хода:', move)
        expect(move.length).toBe(2)
    });
    test('получаем массив с ходами', () => {
        const moves = getArrows(3, 5);
        console.log('Массив с ходами:', moves)
        expect(moves.length).toBe(10)
    });
    test('получаем объект с прогрессом', () => {
        const progress = getProgress(5);

        expect(progress).toEqual({ totalMoves: 5, timer: 7, speed: 2 });
    });
    test('форматируем время', () => {
        const format = getPadTime(2);

        expect(format).toBe('02');
    });
})