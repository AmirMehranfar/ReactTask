import { ETaskType, Task } from "../types/task";

export const filteredTask = (
  type: ETaskType = ETaskType.ALL,
  taskList: Task[]
): Task[] => {
  switch (type) {
    case "COMPLETED":
      return taskList.filter((item) => item.completed === true);
    case "NOT_COMPLETED":
      return taskList.filter((item) => item.completed === false);
    default:
      return taskList;
  }
};
