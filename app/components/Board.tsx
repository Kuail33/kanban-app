"use client";
import { useState } from "react";
import { useContext } from "react";
import Column from "./Column";
import PreviewDrag from "./PreviewDrag";
import { DragOverlay, DragStartEvent } from "@dnd-kit/core";
import { DndContext, closestCenter, DragEndEvent } from "@dnd-kit/core";
import { BoardContext } from "./BoardProvider";

export default function Board() {
  const [dragID, setDragID] = useState<number | null>(null)
  // Id to start the drag
  
  const context = useContext(BoardContext);
  if (!context) return null;
  const { tasks, moveTask } = context;


  function handleDragStart(event: DragStartEvent) {
    setDragID(event.active.id as number)
  }

  function handleDragEnd(event: DragEndEvent) {
    const { active, over } = event;
    if (!over) return

    //new status
    const newStatus = over.id as "todo" | "inProgress" | "done";
    moveTask(active.id, newStatus)
  }

  return (
    <DndContext autoScroll={false} collisionDetection={closestCenter} onDragEnd={handleDragEnd} onDragStart={handleDragStart}>
      {/* Column */}
      <div id="board" className="flex flex-center gap-4 justify-center items-stretch p-6 h-screen mx-auto overflow-hidden">
        <Column
          title="To-do"
          status="todo"
          tasks={tasks.filter((t) => t.status === "todo")}
        />
        <Column
          title="Doing"
          status="inProgress"
          tasks={tasks.filter((t) => t.status === "inProgress")}
        />
        <Column
          title="Done!"
          status="done"
          tasks={tasks.filter((t) => t.status === "done")}
        />
      </div>
      {/* End Column Section */}

      <DragOverlay>
        {dragID != null ? <PreviewDrag taskID = {dragID}/> : null}
      </DragOverlay>
    </DndContext>
  );
}
