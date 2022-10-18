import { useEffect, useCallback, useState, useRef } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Wrapper, ContentPage } from '../styles/pages/Home.style';
import { SideBar } from '../components/SideBar';
import { Todo } from '../components/Todo';
import { ITodoModel } from '../model/Todo';
import { getAll } from '../services/todo_api/todo_api';

export const Home = () => {
    const notifySuccess = (message: string) => toast(message);
    const notifyError = (message: string) => toast.error(message);

    const [todosList, setTodosList] = useState<ITodoModel[]>([]);
    const shouldRequest = useRef(true);

    useEffect(() => {
        if (shouldRequest.current) {
            shouldRequest.current = false;
            getAll('https://localhost:7280/api/TODO/getAllTodos',
                (response: any) => {
                    notifySuccess("ToDos carregados com sucesso!");
                    response.data.forEach((todo: ITodoModel) => {
                        setTodosList(todosList => [...todosList, todo]);
                    });
                },
                (error: any) => {
                    notifyError("Erro ao carregar ToDos");
                    console.log("Error: ", error);
                });
        }
    }, []);

    const todos = useCallback(() => {
        return todosList?.map(todo => <Todo key={todo.todoId?.toString()} todo={todo} />);
    }, [todosList])

    return (
        <Wrapper>
            <SideBar />
            <ToastContainer />
            <ContentPage>
                {todos()}
            </ContentPage>
        </Wrapper>
    );
}