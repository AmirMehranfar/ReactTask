import React, { useState } from "react";
import Box from "@mui/material/Box";
import List from "@mui/material/List";
import { Droppable, Draggable } from "react-beautiful-dnd";
import { useSelector } from "react-redux";
import { ETaskType, Task } from "../../types/task";
import { filteredTask } from "../../utils/filterTask";
import TaskCard from "../taskCard";
import { RootState } from "../../redux/store";
import TaskForm from "../taskForm/taskForm";

const TaskLayout = (): JSX.Element => {
  const tasks = useSelector((state: RootState) => state);
  const [taskList, setTaskList] = useState<Task[]>([]);
  const [filter, setFilter] = useState<ETaskType>(ETaskType.ALL);

  React.useEffect(() => {
    setTaskList(filteredTask(filter, tasks));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [filter, tasks]);

  return (
    <Box borderRadius={1} width="100%" sx={{ boxShadow: 2, p: 3 }}>
      <TaskForm setFilter={setFilter} />
      <Droppable droppableId="task">
        {(provided) => (
          <List
            sx={{
              minHeight: "300px",
              li: {
                flexDirection: "column",
              },
              "& .MuiListItemText-root": {
                width: "100%",
              },
            }}
            ref={provided.innerRef}
            {...provided.droppableProps}
          >
            {taskList?.map((item, index: number) => (
              <Draggable key={item.id} draggableId={item.id} index={index}>
                {(provided, snapshot) => (
                  <TaskCard
                    task={item}
                    providedDrag={provided}
                    snapshotDrag={snapshot}
                  />
                )}
              </Draggable>
            ))}
            {provided.placeholder}
          </List>
        )}
      </Droppable>
    </Box>
  );
};

export default TaskLayout;
