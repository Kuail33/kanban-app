import BoardProvider from "./components/BoardProvider";
import Board from "./components/Board";

export default function Home() {
  return (
  <div>
    <BoardProvider>
      <Board />
    </BoardProvider>
  </div>
  )
}
