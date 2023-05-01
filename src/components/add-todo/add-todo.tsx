import React from "react";

const AddTodo = (props: any) => {
  return (
    <div>
      <div className="space-x-5">
        <input
          type="text"
          placeholder="Buy a milk"
          className="border-2 rounded-lg p-5"
          value={props.newTodo}
          onChange={props.setNewTodo}
        />
        <button
          onClick={props.setNewTodo}
          className="rounded border-2 text-white p-4 bg-blue-500"
        >
          Add
        </button>
      </div>
    </div>
  );
};

export default AddTodo;
