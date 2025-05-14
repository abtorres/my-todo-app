import React from "react";
import { ListItem, ListItemText, IconButton, Box, Slide } from "@mui/material";
import { Check, Delete } from "@mui/icons-material";

const TodoItem = ({ todo, toggleComplete, removeTodo }) => {
    if (!todo) return null; // Prevents errors if todo is undefined

    return (
        <Slide direction="up" in={true} mountOnEnter unmountOnExit>
            <ListItem>
                <Box display="flex" alignItems="center" width="100%">
                    <ListItemText
                        primary={todo.text}
                        sx={{
                            wordWrap: "break-word",
                            overflow: "hidden",
                            whiteSpace: "normal",
                            flexGrow: 1,
                            paddingRight: "20px",
                            textDecoration: todo.completed ? "line-through" : "none",
                        }}
                    />
                    <IconButton color="success" onClick={() => {toggleComplete(todo.id);}}>
                        <Check />
                    </IconButton>
                    <IconButton color="error" onClick={() => removeTodo(todo.id)}>
                        <Delete />
                    </IconButton>
                </Box>
            </ListItem>
        </Slide>
    );
};

export default TodoItem;