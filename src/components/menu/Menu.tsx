import { FC } from 'react';
import { useAppDispatch } from '../../redux/hoocks';
import { clearCompleted, setActiveLink } from '../../redux/masterSlice';

type Props = {
    quantity: number
};

/**
 * Компонент рендерит карточку тудушки с данными из props
 */
const Card: FC<Props> = ({ quantity }) => {
    const dispatch = useAppDispatch();

    return (
        <div className='cardOut'>
            {quantity}
            <button onClick={() => { dispatch(setActiveLink("all")) }}>All</button>
            <button onClick={() => { dispatch(setActiveLink("active")) }}>Active</button>
            <button onClick={() => { dispatch(setActiveLink("completed")) }}>Completed</button>
            <button onClick={() => { dispatch(clearCompleted()) }}>Clear completed</button>

        </div>

    );
};

export default Card;