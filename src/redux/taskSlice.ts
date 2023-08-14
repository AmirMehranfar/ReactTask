import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Task } from "../types/task";
import { v4 as uuidv4 } from "uuid";

const initialState: Task[] = [];

const taskSlice = createSlice({
  name: "tasks",
  initialState,
  reducers: {
    addTask: {
      reducer: (state, action: PayloadAction<Task>) => {
        state.push(action.payload);
      },
      prepare: (description: string, title: string) => ({
        payload: {
          id: uuidv4(),
          title,
          description,
          completed: false,
        } as Task,
      }),
    },
    setTaskStatus(
      state,
      action: PayloadAction<{ completed: boolean; id: string }>
    ) {
      const index = state.findIndex((todo) => todo.id === action.payload.id);
      state[index].completed = action.payload.completed;
    },
    reorder(
      state,
      action: PayloadAction<{ sourceIndex: number; destinationIndex: number }>
    ) {
      const [item] = state.splice(action.payload.sourceIndex, 1);
      state.splice(action.payload.destinationIndex, 0, item);
    },
  },
});

export const { addTask, setTaskStatus, reorder } = taskSlice.actions;
export default taskSlice.reducer;
