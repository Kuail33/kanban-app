import { useContext } from "react"
import { BoardContext } from "./BoardProvider";
import type { TaskType } from "./Types";

export default function PreviewDrag ({taskID} : { taskID : number }) {
    const context = useContext(BoardContext)
    if (!context) return null;
    
    const { tasks } = context

    const task = tasks.find(function(task : TaskType) {return task.id === taskID })
    if (!task) return null;

    return (
        <div className="w-85 max-w-full min-h-3 m-1 flex justify-start self-center translate-z-6"
            style={{
            padding: "0.5rem",
            marginBottom: "0.5rem",
            backgroundColor: "white",
            border: "5px solid gray",
            borderRadius: "5px",
            cursor: "grab",
            outline: 0,
            }}>
            <div className="text-[20px]">
                <span>{task.title}</span>
            </div>

            <button className="text-black text-[20px]">
                x
            </button>
        </div>
    )
}