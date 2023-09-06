import { FC } from 'react';
import { useAppDispatch, useAppSelector } from '../../redux/hoocks';
import { clearCompleted, setActiveLink } from '../../redux/masterSlice';
import styles from './Menu.module.css'
import { TLink } from '../../interfaces/data';

type Props = {
    quantity: number
};

/**
 * Компонент рендерит карточку тудушки с данными из props
 */
const Card: FC<Props> = ({ quantity }) => {
    const dispatch = useAppDispatch();
    const activeLink = useAppSelector<TLink>((state) => state.master.activeLink);

    return (
        <div className={styles.menu}>
            <div
                className={styles.info}>
                {quantity + " items left"}
            </div>

            <div className={styles.filters}>
                <button
                    className={activeLink === "all" ? styles.active : styles.button}
                    onClick={() => { dispatch(setActiveLink("all")) }}>
                    All
                </button>
                <button
                    className={activeLink === "active" ? styles.active : styles.button}
                    onClick={() => { dispatch(setActiveLink("active")) }}
                >Active
                </button>
                <button
                    className={activeLink === "completed" ? styles.active : styles.button}
                    onClick={() => { dispatch(setActiveLink("completed")) }}>
                    Completed
                </button>
            </div>
            <button
                className={styles.button}
                onClick={() => { dispatch(clearCompleted()) }}>
                Clear completed
            </button>

        </div>

    );
};

export default Card;