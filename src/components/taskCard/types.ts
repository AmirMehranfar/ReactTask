import { DraggableProvided, DraggableStateSnapshot } from "react-beautiful-dnd";
import { Task } from "../../types/task";
export type TaskCardProps = {
  task: Task;
  providedDrag: DraggableProvided;
  snapshotDrag: DraggableStateSnapshot;
};