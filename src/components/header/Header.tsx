import { FC } from 'react';
import styles from './Header.module.css';

/**
 * Компонент рендерит хедер
 */
const Header: FC = () => {

    return (
        <div className={styles.header}>
            todos
        </div>

    );
};

export default Header;