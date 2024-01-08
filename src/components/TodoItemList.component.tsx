import { FC } from "react";
import TodoItem from "./TodoItem.component";
import type { TodoObject } from "@/pages/index";

interface TodoItemListProps {
    handleClickDeleteTodo: (e: React.MouseEvent<HTMLButtonElement>) => void;
    onCheckboxChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
    todoList: TodoObject[];
}

const TodoItemList: FC<TodoItemListProps> = ({
    todoList,
    handleClickDeleteTodo,
    onCheckboxChange,
}): JSX.Element => {
    return (
        <ul>
            {todoList.map((todo) => (
                <TodoItem
                    key={todo.id}
                    todo={todo}
                    handleClickDeleteTodo={handleClickDeleteTodo}
                    handleCheckboxChange={onCheckboxChange}
                />
            ))}
        </ul>
    );
};

export default TodoItemList;
