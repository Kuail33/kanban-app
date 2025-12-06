"use client";

import React, { createContext, useState } from "react";
import { TaskType } from "./Types";

export type BoardContextType = {
  tasks: TaskType[];
  moveTask: (id: TaskType["id"], newStatus: TaskType["status"]) => void;
  addTask: (title: string) => void;
  deleteTask: (id: TaskType["id"]) => void;
};

export const BoardContext = createContext<BoardContextType | undefined>(undefined);

// context wrapper component
export default function BoardProvider({children} : {children: React.ReactNode}) {
  const [tasks, setTasks] = useState<TaskType[]>([]);

  function moveTask(taskID: TaskType["id"], newStatus: TaskType["status"]) {
    const updatedTasks = tasks.map(function(task) {if (task.id === taskID) 
      {return { ...task, status: newStatus }} return task
    });
     setTasks(updatedTasks)
  }
  
  function addTask(title: string) {
    const newTask: TaskType = {
      id: Date.now(),
      title,
      status: "todo",
    };
    setTasks(function(prevTask) {return [newTask, ...prevTask]});
  }

  function deleteTask(taskID: TaskType["id"]): void {
    const remainingTasks = tasks.filter(function(task) {return task.id !== taskID})
    setTasks(remainingTasks)
  }

  return (
    <BoardContext.Provider value={{ tasks, deleteTask, moveTask, addTask }}>
      {children} {/* You cannot change it to another name. I learned this the hard way */}
    </BoardContext.Provider>
  );
}
