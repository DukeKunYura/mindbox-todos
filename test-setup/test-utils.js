import constantHTML from './constantHTML';
import { createMockApi } from 'vi-fetch';

export const render = (content) => {
    document.body.innerHTML = constantHTML;
    const root = document.querySelector('#root');
    root.innerHTML = content;
}

const mockApi = createMockApi({ baseUrl: 'https://jsonplaceholder.typicode.com/todos' });

export const mockGet = mockApi.mockGet;