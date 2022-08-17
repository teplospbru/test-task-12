import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import '../scss/Field.scss';
import { setFinishField } from '../store/gameSlice';

// Игровое поле
const Field = ({ isClickable, setClickable }) => {
    const { fields } = useSelector(state => state.game);
    const dispatch = useDispatch();
    
    // обработка клика по полю
    const handleClick = (index) => {
        if(isClickable) {
            dispatch(setFinishField(index));
            setClickable(false);
        }
    }

    return (
        <div className='fields'>
            {
                fields.map((field, index) => (
                    <div 
                        className='field' 
                        key={ index + '_1' } 
                        onClick={ () => handleClick(index) }
                        style={{ backgroundColor: field[1], borderColor: field[1] }}
                        data-testid="field"
                        >
                        <svg>
                        {
                            field[0] === 'start' 
                                ? ( <use xlinkHref='#spot'></use> ) 
                                : null
                        }
                        {
                            field[0] === 'finish' 
                                ? ( <use xlinkHref='#flag'></use> ) 
                                : null
                        }
                        {
                            field[0] === 'times' 
                                ? ( <use xlinkHref='#times'></use> ) 
                                : null
                        }
                        </svg>
                    </div>
                ))
            }
        </div>
    )
};

export default Field;