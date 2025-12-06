"use client";
import { useDroppable } from "@dnd-kit/core";
import Task from "./Task";
import { TaskType } from "./Types";
import { useContext, useState } from "react";
import { BoardContext } from "./BoardProvider";
import styles from "../styles/columnTitle.module.css";
import button from "../styles/button.module.css"

export default function Column({ title, status, tasks, }: { title: string; status: TaskType["status"]; tasks: TaskType[] }) {
  const { setNodeRef } = useDroppable({ id: status }); // Required field
  const board = useContext(BoardContext);
  const [newInput, setNewInput] = useState<string>("");
  const [showInput, setShowInput] = useState<boolean>(false)

  const statusTitles = {
    todo: styles.todo,
    inProgress: styles.inProgress,
    done: styles.done
  }[status] //Find the right styles

  function openInput() {
    setShowInput(true)
  }

  function handleCancel() {
    setNewInput("");
    setShowInput(false)
  }

  function handleAdd() {
    if (!board) return;
    const trimmedText = newInput.trim();
    if (!trimmedText) return;
    board.addTask(trimmedText); //Calls the addTask function
    setNewInput("");
    setShowInput(false)
  }

  function displayInput() {
    if (status !== "todo") return null;
    return (
      <div className="w-full flex justify-center">
        {!showInput ? (
              <button className={button.button} onClick={openInput} aria-label="add-tast">
              </button>
          ) : (
          <div className="flex flex-col">
            <div className="flex bg-[rgba(37,28,19,0.49)] p-1 m-1 rounded">
              <input className="px-6 border-0 outline-0"
              value = {newInput}
              onChange={function(e) {return setNewInput(e.target.value)}}
              placeholder="New task...">
              </input>
            </div>
            
          <div className="flex gap-4 justify-center">
            <button onClick={handleAdd}> Add </button>
            <button onClick={handleCancel}> Cancel </button>
          </div>
          </div>
          )
        }

      </div>
    )
  }
  return (
    <div className="w-90 max-w-full h-[703px] flex flex-col bg-[rgba(243,239,230,1)] m-2 rounded hover:translate-y-1.5">

    {/* Header */}
    <div className="p-2">
      <div className="flex overflow-hidden justify-center items-center bg-stone-100 w-85 h-[140px] mt-3 border-7 border-[#251C13]">
        <div className="bg-[#251C13] w-[97%] h-[93%] flex justify-center items-center overflow-visible">
          <div className={statusTitles}>{title}</div>
        </div>
      </div>
    </div>

    {/* Scrollable Task List */}
    <div
      ref={setNodeRef}
      className="flex grow shrink flex-col gap-2 min-h-0 overflow-hidden"
    >
      {tasks.map((task) => (
        <Task key={task.id} task={task} />
      ))}
    </div>

    {/* Footer (+ button) */}
    <div className="w-full flex items-center justify-center pb-5">
      {displayInput()}
    </div>

  </div>
  );
}
