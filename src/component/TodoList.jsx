import React from "react";
import { useSelector } from "react-redux";

import Todo from "./Todo";
function TodoList() {
  const todos = useSelector((state) => state.todos);

  return (
    <div>
      {/* <!-- todo list --> */}
      <div class="mt-2 text-gray-700 text-sm max-h-[300px] overflow-y-auto">
        {todos.map((todo, index) => (
          <Todo todo={todo} key={todo.id} />
        ))}
        {/* <!-- todo --> */}
      </div>
    </div>
  );
}

export default TodoList;
