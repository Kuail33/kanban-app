"use client";
import { useDraggable } from "@dnd-kit/core";
import { TaskType } from "./Types";
import { BoardContext } from "./BoardProvider";
import {useContext} from "react";

export default function Task({ task }: { task: TaskType }) {
  const { 
  attributes, //ARIA html attributes for screen reader
  listeners, //Pointer event handler
  setNodeRef, //reference for draggable component
  transform,
  isDragging  
    // When perform, the css move in {x: number, y: number}
    //IF you want to set a set amount of transform then declare x and y here
    } = useDraggable({id: task.id}) // must be unique

    const context = useContext(BoardContext)
    if (!context) return null;
    const { deleteTask } = context

    const style = {
      //makes the dragged component follow mouse
      transform: transform ? `translate3d(${transform.x}px, ${transform.y}px, 0)` : undefined,
      padding: "0.5rem",
      marginBottom: "0.5rem",
      backgroundColor: "white",
      border: "5px solid gray",
      borderRadius: "5px",
      cursor: "grab",
      outline: 0,
      opacity: isDragging ? 0 : 1,
      PointerEvent: isDragging ? "none" : "auto"
    }

  
  return (
    <div className="w-85 max-w-full min-h-3 m-1 flex justify-between items-center self-center translate-z-6"
      ref={setNodeRef}
      style={style}
      {...listeners}
      {...attributes}
    > 

      <div className="text-[20px]">
        <span>{task.title}</span>
      </div>

      <button className="text-black text-[20px] flex-end"
      onPointerDown={(e) => e.stopPropagation() } //** stop dragging*/}
      onClick={(e) =>{ e.stopPropagation(); deleteTask(task.id)}}
      > x 
      </button>

    </div>
  );
}
