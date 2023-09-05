import axios from 'axios';
import { TData } from '../interfaces/data';

export const getData = async () => {
    try {
        const response = await axios.get<TData>('https://jsonplaceholder.typicode.com/todos');
        if (response !== undefined) {
            return response.data;
        } else return [];
    } catch (error) {
        console.error(error);
        return [];
    }
}