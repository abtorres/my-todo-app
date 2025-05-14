import React from "react";
import TodoItem from "./TodoItem";
import { Slide } from "@mui/material";

const TodoList = ({ todos, toggleComplete, removeTodo }) => {
    return (
        <div>
            {todos.map((todo) => (
                <Slide key={todo.id} direction="up" in={true} mountOnEnter unmountOnExit>
                    <div>
                        <TodoItem todo={todo} toggleComplete={toggleComplete} removeTodo={removeTodo} />
                    </div>
                </Slide>
            ))}
        </div>
    );
};

export default TodoList;