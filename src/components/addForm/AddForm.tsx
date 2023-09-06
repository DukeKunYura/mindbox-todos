import { FC, SyntheticEvent, useRef } from 'react';
import { IDataItem } from '../../interfaces/data';
import { nanoid } from 'nanoid';
import { useAppDispatch } from '../../redux/hoocks';
import { addTodo } from '../../redux/masterSlice';

/**
 * Компонент рендерит карточку тудушки с данными из props
 */
const Card: FC = () => {
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
            <form ref={formRef} onSubmit={e => handleSubmit(e)}>
                <input
                    type='text'
                    name="text"
                    placeholder={"туду что туду"}
                >
                </input>
                <button type='submit'></button>
            </form>


        </div>

    );
};

export default Card;