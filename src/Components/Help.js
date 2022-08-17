import { useDispatch, useSelector } from 'react-redux';
import '../scss/Help.scss';
import { setReset } from '../store/gameSlice';

// экран справки
const Help = () => {
    const { totalMoves, speed } = useSelector(state => state.game);
    const dispatch = useDispatch();

    return (
        <>
            <h2>Как играть:</h2>
            <p>Двигайся в лабиринте по стрелкам</p>
            <h2>Прогресс:</h2>
            <p>{ 'Уровень сложности - ' + (totalMoves - 2) }</p>
            <p>{ 'Скорость - ' + speed }</p>
            <p>{ 'Количество ходов - ' + totalMoves }</p>
            <div className='btn' onClick={ () => dispatch(setReset()) } data-testid="reset">Сбросить прогресс</div>
        </>
    )
};

export default Help;