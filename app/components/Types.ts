// General taskType
export type TaskType = {
  id: number | string;
  title: string;
  status: "todo" | "inProgress" | "done";
};