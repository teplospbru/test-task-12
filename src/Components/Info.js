import {  useEffect, useRef, useState  } from 'react';
import { useDispatch, useSelector, } from 'react-redux';
import { setIsTimer, setStartField } from '../store/gameSlice';
import '../scss/Info.scss';
import { getPadTime } from '../api/api';

// Информационное окно - кнопка
const Info = ({ setClickable }) => {
    const dispatch = useDispatch();
    const { message, color, icon } = useSelector(state => state.game.info);
    const { isTimer, timer } = useSelector(state => state.game);
    const div = useRef();
    const [width, setWidth] = useState('');
    const [height, setHeight] = useState('');
    const [timeLeft, setTimeLeft] = useState(timer);

    // запоминаем размер элемента <Info />
    useEffect(() => {
        setWidth(div.current.getBoundingClientRect().width + 'px');
        setHeight(div.current.getBoundingClientRect().height + 'px')  
    }, [div]);

    // управляем таймером
    useEffect(() => {
        const interval = setInterval(() => {
            isTimer && setTimeLeft(timeLeft => timeLeft >= 1 ? timeLeft - 1 : 0);
        }, 1000);
        if(timeLeft === 0) {
            dispatch(setIsTimer(false));
            setClickable(false);
            setTimeLeft(timer);
        }
        return () => clearInterval(interval);
    }, [isTimer, timeLeft, dispatch]);

    // управляем кликом по элементу <Info />
    const handleClick = () => {
        if(!isTimer) {
            dispatch(setStartField());
            setClickable(true);
            setTimeLeft(timer);
        }
    }

    return  (
        <div 
            className={ isTimer ? "non-active info" : "info"} 
            onClick={ handleClick } 
            style={{ color, width, height }} 
            ref={ div } 
            data-testid="info"
        >
            {
                isTimer 
                    ? (<span style={{ color: '#fff' }}>{ '00:' + getPadTime(timeLeft) }</span>)
                    : (<>{ message }
                        <div>
                            <svg style={{ fill: color }} data-testid="icon">
                                <use xlinkHref={ '#' + icon }></use>
                            </svg>
                        </div></>)
            }
        </div>
    )
};

export default Info;