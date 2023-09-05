import { FC } from 'react';
import { IDataItem } from '../../components/interfaces/data';

/**
 * Компонент рендерит карточку тудушки с данными из props
 */
const Card: FC<IDataItem> = ({
    title,
    completed,
    id,
}) => {

    return (
        <div className='cardOut'>
            <div className='card'>
                <div className='cardTitle'>
                    {title}
                </div>
            </div>
        </div>

    );
};

export default Card;