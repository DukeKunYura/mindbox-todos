export interface IDataItem {
    id: string;
    title: string;
    userId: string;
    completed: boolean;
}

export type TData = IDataItem[] | [];

export interface ICheck {
    id: number
    completed: boolean
}

export type TLink = "all" | "completed" | "active"

export type TState = {
    activeLink: TLink
    todos: TData
};