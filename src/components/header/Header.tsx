import { FC } from 'react';

/**
 * Компонент рендерит хедер с общим количеством карточек
 */
const Header: FC = () => {

    return (
        <div className='header'>
            <div className='today'>Today</div>
        </div>

    );
};

export default Header;