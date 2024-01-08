import test from "@/test/test";
import { useEffect, useState } from "react";
import TodoItemList from "@/components/TodoItemList.component";

export interface TodoObject {
    id: number;
    value: string;
    isComplete: boolean;
}

function saveTodos(todos: TodoObject[]) {
    localStorage.setItem("todos", JSON.stringify(todos));
}

function loadTodos() {
    const todos = localStorage.getItem("todos");
    if (!todos) return null;
    return JSON.parse(todos) as TodoObject[];
}

export default function Home() {
    const [todos, setTodos] = useState<TodoObject[]>([]);
    const [todoFormInput, setTodoFormInput] = useState<string>("");

    useEffect(() => {
        const savedTodos = loadTodos();
        if (todos.length === 0 && savedTodos) setTodos(savedTodos);
    }, []);

    useEffect(() => {
        if (todos.length !== 0) saveTodos(todos);
        // const uuid = crypto.randomUUID();
        // console.log(uuid);
    }, [todos]);

    function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
        e.preventDefault();
        const id = Math.floor(Date.now() * Math.random());
        const newTodo: TodoObject = {
            id,
            value: todoFormInput,
            isComplete: false,
        };
        setTodos([...todos, newTodo]);
        setTodoFormInput("");
    }

    function handleChangeFormInput(e: React.FormEvent<HTMLInputElement>) {
        setTodoFormInput(e.currentTarget.value);
    }

    function handleClickDeleteTodo(e: React.MouseEvent<HTMLButtonElement>) {
        const todoIdForDelete = Number(e.currentTarget.className);
        const newTodos = todos.filter((todo) => todo.id !== todoIdForDelete);
        saveTodos(newTodos);
        setTodos(newTodos);
    }

    function handleCheckboxChange(e: React.ChangeEvent<HTMLInputElement>) {
        const todoIdForChange = Number(e.currentTarget.className);
        const todoForChange = todos.find((todo) => todo.id === todoIdForChange);

        if (!todoForChange) return;

        const newTodos = todos.map((todo) => {
            if (todoIdForChange === todo.id) {
                if (e.target.checked && !todoForChange.isComplete) {
                    return { ...todo, isComplete: true };
                } else if (!e.target.checked && todoForChange.isComplete) {
                    return { ...todo, isComplete: false };
                }
            } else {
                return todo;
            }
        });
        if (newTodos.includes(undefined) || newTodos.length === 0) return;
        e.currentTarget.checked = todoForChange.isComplete;
        setTodos(newTodos as TodoObject[]);
    }
    return (
        <div className='test__wrapper _wrapper'>
            <div className='todo'>
                <div className='todo__container _container'>
                    <div className='todo__app'>
                        <div className='todo__items-container'>
                            {todos.length > 0 && (
                                <TodoItemList
                                    todoList={todos}
                                    handleClickDeleteTodo={
                                        handleClickDeleteTodo
                                    }
                                    onCheckboxChange={handleCheckboxChange}
                                />
                            )}
                        </div>
                        <form className='todo__form' onSubmit={handleSubmit}>
                            <input
                                type='text'
                                className='todo__input'
                                onChange={handleChangeFormInput}
                                value={todoFormInput}
                            />
                            <button type='submit'>Add Todo</button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
}
