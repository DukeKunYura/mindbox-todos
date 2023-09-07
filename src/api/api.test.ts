import { describe, expect, vi, test } from "vitest";
import { getData } from './api'
import axios from 'axios'

vi.mock('axios')

describe('Users Service', () => {
    describe('fetchUsers', () => {
        test('makes a GET request to fetch users', async () => {
            const todosMock = [{
                id: 1,
                title: "string",
                userId: 5,
                completed: true
            }, {
                id: 2,
                title: "string",
                userId: 6,
                completed: false
            }];

            (axios.get as any).mockResolvedValue({
                data: todosMock,
            })

            const todos = await getData();

            expect(axios.get).toHaveBeenCalledWith('https://jsonplaceholder.typicode.com/todos')
            expect(todos).toStrictEqual(todosMock)


        })
    })
})