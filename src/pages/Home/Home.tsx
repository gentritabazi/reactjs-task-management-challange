import { Button, Typography, Box } from "@mui/material";
import TasksList from "../../components/TasksList/TasksList";

const Home = () => {
  return (
    <div>
      <Box sx={{ mb: "20px" }} />

      <div style={{ textAlign: "right" }}>
        <Button variant="contained">Create Task</Button>
      </div>

      <Box sx={{ mb: "20px" }} />

      <Typography variant="h5" gutterBottom>
        Tasks List
      </Typography>

      <Box sx={{ mb: "20px" }} />

      <TasksList />
    </div>
  );
};

export default Home;
