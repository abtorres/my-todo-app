import React, { useState } from "react";
import { TextField, Button, Box } from "@mui/material";

const AddTodo = ({ addTodo }) => {
  const [text, setText] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!text.trim()) return;
    addTodo(text);
    setText("");
  };

  return (
    <form onSubmit={handleSubmit}>
      <Box display="flex" gap={1} my={2}>
        <TextField
          label="Add a new task..."
          variant="outlined"
          fullWidth
          value={text}
          onChange={(e) => setText(e.target.value)}
          onKeyPress={(e) => e.key === "Enter" && handleSubmit(e)}
        />
        <Button variant="contained" color="primary" type="submit">
          Add
        </Button>
      </Box>
    </form>
  );
};

export default AddTodo;