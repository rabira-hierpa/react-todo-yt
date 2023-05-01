import { useState } from "react";
import AddTodo from "./components/add-todo/add-todo";

function App() {
  const [newTodo, setNewTodo] = useState("");
  const handleAddTodo = (e: any) => {
    console.log(e.target?.value);
    setNewTodo(e.target.value);
  };
  return (
    <div className="flex justify-center">
      <div className="flex-col space-y-10">
        <h1 className="font-semibold text-blue-400">React Todo List</h1>
        <AddTodo newTodo={newTodo} setNewTodo={handleAddTodo} />
      </div>
    </div>
  );
}

export default App;
