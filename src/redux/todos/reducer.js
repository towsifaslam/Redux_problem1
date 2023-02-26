import initialState from "./initialState";
import {
  CLEARCOMPLEDED,
  COLORSELECTED,
  ADDED,
  ALLCOMPLEDED,
  DELETED,
  TOGGLED,
} from "./ActionTypes";

const nexTodoID = (todo) => {
  const maxId = todo.reducer((maxId, todo) => Math.max(todo.id, maxId), -1);
  return maxId + 1;
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ADDED:
      return [
        ...state,
        {
          id: nexTodoID(state),
        },
      ];
    case TOGGLED:
      return state.map((todo) => {
        if (todo.id !== action.payload) {
          return todo;
        }
        return {
          ...todo,
          completed: !todo.completed,
        };
      });
    case COLORSELECTED:
      const { todoId, color } = action.payload;
      return state.map((todo) => {
        if (todo.id !== todoId) {
          return todo;
        }
        return {
          ...todo,
          color: color,
        };
      });
    case DELETED:
      return state.filter((todo) => todo.id !== action.payload);
    case ALLCOMPLEDED:
      return state.map((todo) => {
        return {
          ...todo,
          completed: true,
        };
      });
    case CLEARCOMPLEDED:
      return state.filter((todo) => !todo.completed);
    default:
      return state;
  }
};

export default reducer;
