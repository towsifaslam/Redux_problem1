import initialState from "./initialState";
import { COLORCHANGED, STATUSCHANGED } from "./ActionType";
const reducer = (state = initialState, action) => {
  switch (action.type) {
    case STATUSCHANGED:
      return {
        ...state,
        status: action.payload,
      };
    case COLORCHANGED:
      const { color, changeType } = action.payload;
      switch (changeType) {
        case "added":
          return {
            ...state,
            color: [...state.colors, color],
          };
        case "removed":
          return {
            ...state,
            color: state.colors.filter(
              (existingColor) => existingColor !== color
            ),
          };
        default:
          return state;
      }
    default:
      return state;
  }
};

export default reducer;
