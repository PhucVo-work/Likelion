import type { Todo } from "../components/types/todos.type";
import axiosTodoClient from "../api/axiosTodoClient";


export const getAllTodos = async(): Promise<Todo[]> => {
    const response = await axiosTodoClient.get<Todo[]>("/todos")
    return response.data; 
}


export const createTodo = async(title: string): Promise<Todo> => {
    const response = await axiosTodoClient.post<Todo>("/todos")
    return response.data
}
