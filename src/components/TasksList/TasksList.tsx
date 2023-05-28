import { useContext } from "react";
import { MainContext } from "../../contexts/MainContext";
import { Grid, Box } from "@mui/material";
import Paper from "@mui/material/Paper";
import { styled } from "@mui/material/styles";
import { useNavigate } from "react-router-dom";

const TasksList = () => {
  const { todos, deleteTodo } = useContext(MainContext)!;
  const navigate = useNavigate();

  const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: "#fff",
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: "center",
    color: theme.palette.text.secondary,
  }));

  const onClickDelete = (todoId: string) => {
    deleteTodo(todoId);
  };

  const onClickEdit = (todoId: string) => {
    navigate(`/edit-task/${todoId}`);
  };

  return (
    <div>
      {!todos.length && <div>No Tasks</div>}

      <Grid container spacing={2}>
        {todos.map((todo) => {
          return (
            <Grid item xs={6} key={todo.id}>
              <Item>
                Title: {todo.title} | Status: {todo.status}
                <Box sx={{ mb: "20px" }} />
                <button onClick={() => onClickEdit(todo.id)}>Edit</button> |
                <button onClick={() => onClickDelete(todo.id)}>Delete</button>
              </Item>
            </Grid>
          );
        })}
      </Grid>
    </div>
  );
};

export default TasksList;
