import React from "react";
import { toggled, colorselected, deleted } from "../redux/todos/Action";
import cancle from "../assets/cancel.png";
import { useDispatch } from "react-redux";
function Todo({ todo }) {
  const dispatch = useDispatch();
  const { id, text, completed, color } = todo;
  const handler = (todoID) => {
    dispatch(toggled(todoID));
  };
  const handleChangeClr = (todoId, color) => {
    dispatch(colorselected(todoId, color));
  };
  const handleDelete = (todoId) => {
    dispatch(deleted(todoId));
  };
  return (
    <div class="flex justify-start items-center p-2 hover:bg-gray-100 hover:transition-all space-x-4 border-b border-gray-400/20 last:border-0">
      <div
        class={`rounded-full bg-white border-2 border-gray-400 w-5 h-5 flex flex-shrink-0 justify-center items-center mr-2 ${
          completed && "border-green-500 focus-within:border-green-500"
        } `}
      >
        <input
          type="checkbox"
          onChange={() => handler(id)}
          checked={completed}
          class=" opacity-0 absolute rounded-full"
        />
        {completed && (
          <svg
            class=" fill-current w-3 h-3 text-green-500 pointer-events-none"
            viewBox="0 0 20 20"
          >
            <path d="M0 11l2-2 5 5L18 3l2 2L7 18z" />
          </svg>
        )}
      </div>

      <div className="select-none flex-1 line-through">{text}</div>

      <div
        className={`flex-shrink-0 h-4 w-4 rounded-full border-2 ml-auto cursor-pointer hover:bg-green-500  ${
          color === "green" && "border-green-500 bg-green-500"
        }`}
        onClick={() => handleChangeClr(id, "green")}
      ></div>

      <div
        className={`flex-shrink-0 h-4 w-4 rounded-full border-2 ml-auto cursor-pointer hover:bg-yellow-500 ${
          color === "yellow" && "border-yellow-500  bg-yellow-500"
        }`}
        onClick={() => handleChangeClr(id, "yellow")}
      ></div>

      <div
        className={`flex-shrink-0 h-4 w-4 rounded-full border-2 ml-auto cursor-pointer hover:bg-red-500  ${
          color === "red" && " border-red-500 bg-red-500"
        }`}
        onClick={() => handleChangeClr(id, "red")}
      ></div>

      <img
        src={cancle}
        class="flex-shrink-0 w-4 h-4 ml-2 cursor-pointer"
        alt="Cancel"
        onClick={() => handleDelete(id)}
      />
    </div>
  );
}

export default Todo;
