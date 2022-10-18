import { useState } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { ITodoModel } from '../model/Todo';
import { deleteTodo, editTodo } from '../services/todo_api/todo_api';
import { Content } from '../styles/components/Todo.style';

type TodoType = {
    todo: ITodoModel
};

export const Todo = ({ todo }: TodoType) => {

    const [todoState, setTodoState] = useState<ITodoModel>(todo);
    const [editMode, setEditMode] = useState<boolean>(false);

    const notifySuccess = (message: string) => toast(message);
    const notifyError = (message: string) => toast.error(message);

    const editTodoFn = () => {
        editTodo(
            `https://localhost:7280/api/TODO/edit/${todoState.todoId}`,
            todoState,
            (response: any) => {
                notifySuccess(response.data);
            },
            (error: any) => {
                notifyError(error.data);
            }
        );
    }

    const deleteTodoFn = () => {
        deleteTodo(`https://localhost:7280/api/TODO/delete/${todoState.todoId}`,
            (response: any) => {
                notifySuccess(response.data);
            },
            (error: any) => {
                notifyError(error.data);
            }
        );
    }

    return (
        <Content>
            <ToastContainer />
            <div>
                Title:
                <input
                    type="text"
                    value={todoState.title}
                    disabled={!editMode}
                    onChange={(event) => {
                        setTodoState(prevState => {
                            return {
                                ...prevState,
                                title: event.target.value
                            }
                        });
                    }}
                />
            </div>
            <div>
                <p>Description: </p>
                <textarea
                    value={todoState.description}
                    disabled={!editMode}
                    onChange={(event) => {
                        setTodoState(prevState => {
                            return {
                                ...prevState,
                                description: event.target.value
                            }
                        });
                    }}
                />
            </div>
            <div>
                Concluded:
                <input
                    type="checkbox"
                    checked={todoState.concluded}
                    disabled={!editMode}
                    onChange={() => {
                        setTodoState(prevState => {
                            return {
                                ...prevState,
                                concluded: !todoState.concluded
                            }
                        });
                    }}
                />
            </div>
            <div>
                Registration Date: {new Date(todoState.registrationDate).toLocaleDateString("pt-BR")}
            </div>
            <div style={{ marginTop: '1vh', display: 'flex', justifyContent: editMode ? 'center' : 'end' }}>
                <button
                    onClick={() => setEditMode(!editMode)}
                    style={{
                        marginRight: editMode ? '8px' : '0',
                        backgroundColor: editMode ? '#6a6a6bd7' : '#1c0365d8'
                    }}
                    disabled={editMode}>
                    Editar
                </button>
                {
                    editMode ?
                        <button
                            style={{ backgroundColor: '#1c0365d8' }}
                            onClick={() => {
                                setEditMode(!editMode);
                                editTodoFn();
                            }}
                        >
                            Enviar edição
                        </button>
                        : <div />
                }
                {
                    !editMode ?
                        <button
                            style={{ backgroundColor: '#c61313d7' }}
                            onClick={() => {
                                deleteTodoFn();
                            }}
                        >
                            Deletar ToDo
                        </button>
                        : <div />
                }
            </div>
        </Content >
    );
}