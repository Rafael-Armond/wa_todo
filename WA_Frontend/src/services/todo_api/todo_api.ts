import axios from 'axios';
import { ITodoModel } from '../../model/Todo';

export const getAll = (url: string, callBackFunctionSuccess: Function, callBackFunctionError: Function) => {
    axios.get(url)
        .then((response) => callBackFunctionSuccess(response))
        .catch((error) => callBackFunctionError(error));
}

export const createTodo = (url: string, todo: ITodoModel, callBackFunctionSuccess: Function, callBackFunctionError: Function) => {
    axios.post(url, todo)
        .then((response) => callBackFunctionSuccess(response))
        .catch((error) => callBackFunctionError(error));
}

export const deleteTodo = (url: string, callBackFunctionSuccess: Function, callBackFunctionError: Function) => {
    axios.delete(url)
        .then((response) => callBackFunctionSuccess(response))
        .catch((error) => callBackFunctionError(error));
}

export const editTodo = (url: string, todo: ITodoModel, callBackFunctionSuccess: Function, callBackFunctionError: Function) => {
    axios.put(url, todo)
        .then((response) => callBackFunctionSuccess(response))
        .catch((error) => callBackFunctionError(error));
}