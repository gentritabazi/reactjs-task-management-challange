import { useContext } from "react";
import { MainContext } from "../../contexts/MainContext";
import { Grid } from "@mui/material";
import Paper from "@mui/material/Paper";
import { styled } from "@mui/material/styles";

const TasksList = () => {
  const { todos } = useContext(MainContext)!;

  const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: "#fff",
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: "center",
    color: theme.palette.text.secondary,
  }));

  return (
    <div>
      {!todos.length && <div>No Tasks</div>}

      <Grid container spacing={2}>
        {todos.map((todo) => {
          return (
            <Grid item xs={6} key={todo.id}>
              <Item>{todo.title}</Item>
            </Grid>
          );
        })}
      </Grid>
    </div>
  );
};

export default TasksList;
