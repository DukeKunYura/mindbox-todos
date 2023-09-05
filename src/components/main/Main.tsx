import { FC, useEffect, useState } from 'react';
import Header from '../header/Header';
import Card from '../card/Card';
import { TData } from '../interfaces/data';


/**
 * Компонент отправляет асинхронный запрос для получения данных,
 * полученные данные из стора todo мапит данные в карточки
 */
const Main: FC = () => {
    const [todos, setTodos] = useState<TData>([]);

    useEffect(() => {
        console.log("render main");
        console.log(todos);
    }, []);

    return (
        <div className='section'>
            <Header />
            <div className='cards'>
                {todos.map(item =>
                    <Card
                        key={item.id}
                        title={item.title}
                        completed={item.completed}
                        id={item.id}
                        userId={item.userId}
                    />)}
            </div>
        </div>
    );
};

export default Main;