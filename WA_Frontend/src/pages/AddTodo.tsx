import { FormEvent, useState } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { SideBar } from '../components/SideBar';
import { Wrapper, ContentPage } from '../styles/pages/AddTodo.style';
import { ITodoModel } from '../model/Todo';
import { createTodo } from '../services/todo_api/todo_api';

export const AddTodo = () => {
    const [todoTitle, setTodoTitle] = useState('');
    const [todoDescription, setTodoDescription] = useState('');

    const notifySuccess = (message: string) => toast(message);
    const notifyError = (message: string) => toast.error(message);
    const cleanFields = () => {
        setTodoTitle('');
        setTodoDescription('');
    }

    const handleAddToDo = async (event: FormEvent) => {
        event.preventDefault();

        if (todoTitle == '' || todoDescription == '') {
            notifyError("Preencha todos os campos para criar o ToDo");
            return;
        }

        const todoModel: ITodoModel = {
            title: todoTitle,
            description: todoDescription,
            concluded: false,
            registrationDate: new Date()
        }

        createTodo('https://localhost:7280/api/TODO/create', todoModel,
            (response: any) => {
                if (response.status == 200)
                    notifySuccess(response.data);
                cleanFields();
            }, (error: any) => {
                notifyError(error.data);
            })
    }

    return (
        <Wrapper>
            <SideBar />
            <ToastContainer />
            <ContentPage>
                <form onSubmit={handleAddToDo}>
                    <div>
                        <input
                            type={'text'}
                            placeholder={'Title'}
                            value={todoTitle}
                            onChange={(event) => setTodoTitle(event.target.value)}
                        />
                    </div>
                    <br />
                    <div>
                        <textarea
                            placeholder='Description'
                            value={todoDescription}
                            onChange={(event) => setTodoDescription(event.target.value)}
                        />
                    </div>
                    <br />
                    <div style={{ display: 'flex', justifyContent: 'end' }}>
                        <button type='submit'>
                            Create
                        </button>
                    </div>
                </form>
            </ContentPage>
        </Wrapper>
    );
}