import { FC } from "react";
import type { TodoObject } from "@/pages";

interface TodoItemProps {
    todo: TodoObject;
    handleClickDeleteTodo: (e: React.MouseEvent<HTMLButtonElement>) => void;
    handleCheckboxChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}
const TodoItem: FC<TodoItemProps> = ({
    todo,
    handleClickDeleteTodo,
    handleCheckboxChange,
}): JSX.Element => {
    return (
        <li>
            <input
                type='checkbox'
                className={`${todo.id}`}
                name={`${todo.id}`}
                onChange={handleCheckboxChange}
                checked={todo.isComplete}
            />
            <span> </span>
            {todo.isComplete ? (
                <span style={{ textDecoration: "line-through" }}>
                    <label htmlFor={`${todo.id}`}>{todo.value}</label>
                </span>
            ) : (
                <label htmlFor={`${todo.id}`}>{todo.value}</label>
            )}
            <span> </span>
            <button className={`${todo.id}`} onClick={handleClickDeleteTodo}>
                Delete
            </button>
        </li>
    );
};

export default TodoItem;
