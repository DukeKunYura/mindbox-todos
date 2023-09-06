import { FC, useEffect, useState } from 'react';
import Header from '../header/Header';
import Card from '../card/Card';
import { TData, TLink } from '../../interfaces/data';
import { useAppDispatch, useAppSelector } from '../../redux/hoocks';
import { setTodos } from '../../redux/masterSlice';
import { getData } from '../../api/api';
import Menu from '../menu/Menu';
import AddForm from '../addForm/AddForm';
import styles from './MainPage.module.css'


/**
 * Компонент отправляет асинхронный запрос для получения данных,
 * полученные данные из стора todo мапит данные в карточки
 */
const Main: FC = () => {
  const [todoList, setTodoList] = useState<TData>([]);
  const todos = useAppSelector<TData>((state) => state.master.todos);
  const activeLink = useAppSelector<TLink>((state) => state.master.activeLink);

  const dispatch = useAppDispatch();

  useEffect(() => {
    getData().then(res => dispatch(setTodos(res)));
  }, []);

  useEffect(() => {
    if (activeLink === "all") {
      setTodoList(todos)
    }
    if (activeLink === "active") {
      setTodoList(todos.filter(todo => todo.completed === false))
    }
    if (activeLink === "completed") {
      setTodoList(todos.filter(todo => todo.completed === true))
    }
    console.log(activeLink)
  }, [todos, activeLink]);

  return (
    <div className={styles.section}>
      <Header />
      <AddForm />
      <div className={styles.cards}>
        {todoList.map(item =>
          <Card
            key={item.id}
            title={item.title}
            completed={item.completed}
            id={item.id}
            userId={item.userId}
          />)}
      </div>
      <Menu quantity={todos.filter(todo => todo.completed === false).length} />
    </div>
  );
};

export default Main;