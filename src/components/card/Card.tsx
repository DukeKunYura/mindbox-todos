import { FC } from 'react';
import { IDataItem } from '../../interfaces/data';
import { toggleCompleted } from '../../redux/masterSlice';
import { useAppDispatch } from '../../redux/hoocks';

/**
 * Компонент рендерит карточку тудушки с данными из props
 */
const Card: FC<IDataItem> = ({
    title,
    completed,
    id,
}) => {
    const dispatch = useAppDispatch();


    return (
        <div className='cardOut'>
            <div className='card'>
                <div className='cardTitle'>
                    {title}
                </div>
                <input
                    className='checker'
                    type='checkbox'
                    checked={completed}
                    onChange={() => { dispatch(toggleCompleted(id)) }}>
                </input>
            </div>
        </div>

    );
};

export default Card;