import { FC } from 'react';
import { IDataItem } from '../../interfaces/data';
import { toggleCompleted } from '../../redux/masterSlice';
import { useAppDispatch } from '../../redux/hoocks';
import styles from './Card.module.css'

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
        <div className={styles.cardOut}>
            <div className={styles.card}>
                <input
                    className={styles.checker}
                    type='checkbox'
                    checked={completed}
                    onChange={() => { dispatch(toggleCompleted(id)) }}>
                </input>
                <div className={styles.cardTitle}>
                    {title}
                </div>
            </div>
        </div>

    );
};

export default Card;