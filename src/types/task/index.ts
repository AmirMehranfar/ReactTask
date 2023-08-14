export type Task = {
  id: string;
  title: string;
  description: string;
  completed: boolean;
};

export enum ETaskType {
  COMPLETED = "COMPLETED",
  NOT_COMPLETED = "NOT_COMPLETED",
  ALL = "ALL",
}
