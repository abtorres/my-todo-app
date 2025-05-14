import React, { useState, useEffect } from "react";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import { Container, Paper, Typography, List, Button, Fade, Dialog, DialogActions, DialogContent, DialogTitle } from "@mui/material";
import TodoList from "./components/TodoList";
import AddTodo from "./components/AddTodo";

const App = () => {
  const [todos, setTodos] = useState(() => {
    const savedTodos = localStorage.getItem("todos");
    return savedTodos ? JSON.parse(savedTodos) : [];
  });

  const [darkMode, setDarkMode] = useState(() => localStorage.getItem("darkMode") === "true");
  const [open, setOpen] = useState(false);

  useEffect(() => {
    localStorage.setItem("darkMode", darkMode);
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [darkMode, todos]);

  const theme = createTheme({
    palette: {
      mode: darkMode ? "dark" : "light",
      primary: { main: "#4CAF50" },
      secondary: { main: "#FF5722" },
      background: {
        default: darkMode ? "#212121" : "#f4f4f4",
        paper: darkMode ? "#424242" : "#fff"
      }
    }
  });

  const addTodo = (text) => {
    setTodos([...todos, { id: Date.now(), text, completed: false }]);
  };

 const toggleComplete = (id) => {
  setTodos((prevTodos) =>
    prevTodos.map((todo) =>
      todo.id === id ? { ...todo, completed: !todo.completed } : todo
    )
  );
};

  const removeTodo = (id) => {
    setTodos(todos.filter(todo => todo.id !== id));
  };

  const clearTodos = () => {
    setTodos([]);
    setOpen(false);
  };

  return (
    <ThemeProvider theme={theme}>
      <Container maxWidth="sm" sx={{ textAlign: "center", mt: 3 }}>
        <Fade in={true} timeout={800}>
          <Paper elevation={3} sx={{ p: 3 }}>
            <Button variant="contained" onClick={() => setDarkMode(!darkMode)}>
              {darkMode ? "Switch to Light Mode" : "Switch to Dark Mode"}
            </Button>
            <Typography variant="h4" sx={{ mt: 2 }}>Todo List</Typography>
            <AddTodo addTodo={addTodo} />
            <Button variant="contained" color="secondary" onClick={() => setOpen(true)} sx={{ mt: 2 }}>
              Delete All Tasks
            </Button>
            <List>
              <TodoList todos={todos} toggleComplete={toggleComplete} removeTodo={removeTodo} />
            </List>
          </Paper>
        </Fade>
        <Dialog open={open} onClose={() => setOpen(false)}>
          <DialogTitle>Confirm Deletion</DialogTitle>
          <DialogContent>Are you sure you want to delete all tasks? This action cannot be undone.</DialogContent>
          <DialogActions>
            <Button onClick={() => setOpen(false)} color="primary">Cancel</Button>
            <Button onClick={clearTodos} color="error">Delete</Button>
          </DialogActions>
        </Dialog>
      </Container>
    </ThemeProvider>
  );
};

export default App;