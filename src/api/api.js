// карта полей и доступных ходов для них
const map = [
    { id: 1, moves: [['right', 2], ['down', 4]] },
    { id: 2, moves: [['left', 1], ['right', 3], ['down', 5]] },
    { id: 3, moves: [['left', 2], ['down', 6]] },
    { id: 4, moves: [['up', 1], ['right', 5], ['down', 7]] },
    { id: 5, moves: [['left', 4], ['up', 2], ['right', 6], ['down', 8]] },
    { id: 6, moves: [['up', 3], ['left', 5], ['down', 9]] },
    { id: 7, moves: [['up', 4], ['right', 8]] },
    { id: 8, moves: [['left', 7], ['right', 9], ['up', 5]] },
    { id: 9, moves: [['left', 8], ['up', 6]] },
];


// карта прогресса
const progress = [
    { totalMoves: 3, timer: 6, speed: 1 },
    { totalMoves: 4, timer: 6, speed: 1 },
    { totalMoves: 5, timer: 7, speed: 2 },
    { totalMoves: 6, timer: 7, speed: 2 },
    { totalMoves: 7, timer: 8, speed: 3 },
    { totalMoves: 8, timer: 8, speed: 3 },
    { totalMoves: 9, timer: 9, speed: 4 },
    { totalMoves: 10, timer: 9, speed: 4 },
]

// получаем случайное число в диапазоне
export const getRandom = (min, max) => {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min; //Максимум и минимум включаются
};

// получаем случайный ход
export const getArrow = (field) => { // field - текущее поле
    const arr = map.find(item => item.id === field); // извлекаем список доступных ходов
    const move = getRandom(0, arr.moves.length - 1); // получаем случайный ход
    return arr.moves[move];
    
}

// создаём массив с ходами
export const getArrows = (start, moves) => {
    const arr = [];
    let currentField = start; // текущее поле
    for(let i = 0; i < moves; i++) {
        arr[i] = getArrow(currentField); // записываем ход в массив
        currentField = arr[i][1]; // делаем ход текущим
    }
    for(let i = moves; i < 10; i++) {
        arr[i] = '';
    }
    return arr;
}

// получаем прогресс
export const getProgress = (totalMoves) => progress.find(item => item.totalMoves === totalMoves);

// форматируем вывод таймера
export const getPadTime = time => time.toString().padStart(2, '0');