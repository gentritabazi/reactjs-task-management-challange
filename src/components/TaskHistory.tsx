import React from "react";

type TaskHistoryProps = {
  history: { previous: string; next: string }[];
};

const TaskHistory: React.FC<TaskHistoryProps> = ({ history }) => {
  return (
    <div>
      <h2>Task History</h2>
      <ul>
        {history.map((change, index) => (
          <li key={index}>
            Previous: {change.previous}, Next: {change.next}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TaskHistory;
