import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { statusChange } from "../redux/filters/Action";
const numberOfTodos = (nu_of_todos) => {
  switch (nu_of_todos) {
    case 0:
      return "No taske";
    case 1:
      return "1 Task left";
    default:
      return `${nu_of_todos} taks left`;
  }
};
function Fotter() {
  const todos = useSelector((state) => state.todos);
  const filters = useSelector((state) => state.filters);
  const todosRemaing = todos.filter((todo) => !todo.completed).length;
  const dispatch = useDispatch();

  const handleStatusChange = (status) => {
    dispatch(statusChange(status));
  };
  const { status, colors } = filters;
  return (
    <div>
      <div class="mt-4 flex justify-between text-xs text-gray-500">
        <p>{numberOfTodos(todosRemaing)} </p>
        <ul className="flex space-x-1 items-center text-xs">
          <li
            className={`cursor-pointer ${status === "All" && " font-bold"}`}
            onClick={() => handleStatusChange("All")}
          >
            All
          </li>
          <li>|</li>
          <li
            className={`cursor-pointer ${
              status === "Incomplete" && "font-bold"
            }`}
            onClick={() => handleStatusChange("Incomplete")}
          >
            Incomplete
          </li>
          <li>|</li>
          <li
            className={`cursor-pointer ${
              status === "Completed" && "font-bold"
            }`}
            onClick={() => handleStatusChange("Completed")}
          >
            Complete
          </li>
          <li></li>
          <li></li>
          <li class="h-3 w-3 border-2 border-green-500 md:hover:bg-green-500 rounded-full cursor-pointer bg-green-500"></li>
          <li class="h-3 w-3 border-2 border-red-500 md:hover:bg-red-500 rounded-full cursor-pointer"></li>
          <li class="h-3 w-3 border-2 border-yellow-500 md:hover:bg-yellow-500 rounded-full cursor-pointer"></li>
        </ul>
      </div>
    </div>
  );
}

export default Fotter;
