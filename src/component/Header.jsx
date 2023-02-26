import React from "react";
import NOtesImg from "../assets/notes.png";
import Doble from "../assets/double-tick.png";
import Plus from "../assets/plus.png";

function Header() {
  return (
    <div>
      <form
        action=""
        className="flex items-center bg-gray-100 px-4 py-4 rounded-md"
      >
        <img src={NOtesImg} alt="Add Todo" className="w-6 h-6" />
        <input
          type="text"
          placeholder="Type your todo"
          className="w-full text-lg-px-4 py-1 border-none outline-none bg-gray-100 text-gray-500"
        />
        <button
          type="submit"
          className={`appearance-none w-6 h-6 bg-[url('${Plus}')] ng-no-repeat bg-contain mr-4`}
        ></button>
      </form>
      <ul className="flex justify-between my-4 text-xs text-gray-500">
        <li className="flex space-x-1 cursor-pointer">
          <img src={Doble} alt="Complete" className="w-6 h-6" />
          <span>Complete All Task</span>
        </li>
        <li className="cursor-pointer">Clear Completed</li>
      </ul>
    </div>
  );
}

export default Header;
