import { FC, SyntheticEvent, useRef } from 'react';
import { IDataItem } from '../../interfaces/data';
import { nanoid } from 'nanoid';
import { useAppDispatch } from '../../redux/hoocks';
import { addTodo } from '../../redux/masterSlice';
import styles from './AddForm.module.css'

/**
 * Компонент отвечает за добавление нового todo
 */
const AddForm: FC = () => {
    const formRef = useRef<HTMLFormElement>(null);
    const dispatch = useAppDispatch();

    const handleSubmit = (event: SyntheticEvent<HTMLFormElement>) => {
        event.preventDefault();
        const target = event.target as typeof event.target & {
            text: { value: string }
        }
        const formData: IDataItem = {
            id: nanoid(),
            title: target.text.value,
            userId: nanoid(),
            completed: false
        }
        if (target.text.value !== "") {
            console.log(formData);
            dispatch(addTodo(formData));
        }
        if (formRef.current) {
            formRef.current.reset();
        }
    }

    return (
        <div>
            <form className={styles.form} ref={formRef} onSubmit={e => handleSubmit(e)}>
                <input
                    className={styles.input}
                    type='text'
                    name="text"
                    placeholder={"what needs to be done"}
                >
                </input>
                <button className={styles.button} type='submit'>add</button>
            </form>
        </div>

    );
};

export default AddForm;