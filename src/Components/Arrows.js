import { useSelector } from 'react-redux';
import '../scss/Arrows.scss';

// Ходы со стрелками
const Arrows = () => {
    const { moves } = useSelector(state => state.game);

    return (
        <div className='arrows'>
            {
                moves.map((move, index) => (
                    <div className='arrow' style={ move.length > 0 ? { backgroundColor: '#34495e', } : null } key={ index + "_2" }>
                        {
                            move.length > 0 
                                ? (<svg>
                                        <use xlinkHref={ '#' + move[0] }></use>
                                    </svg>)
                                : null
                        }
                    </div>
                ))
            }
        </div>
    )
};

export default Arrows;