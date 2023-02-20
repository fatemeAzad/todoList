import axios from "axios";
const SERVER_URL = "http://localhost:9000";

export const getTodos = () => {
    const url = `${SERVER_URL}/todos`;
    return axios.get(url)
}
export const getTodo=(todoId)=>{
    const url =`${SERVER_URL}/todos/${todoId}`;
    return axios.get(url)
} 
export const createTodo=(todo)=>{
    const url =`${SERVER_URL}/todos`;
    return axios.post(url,todo)
}
export const deleteTodo=(todoId)=>{
    const url =`${SERVER_URL}/todos/${todoId}`;
return axios.delete(url)
}