import { COLORCHANGED, STATUSCHANGED } from "./ActionType";

export const colorChanged = (color, changeType) => {
  return {
    tyep: COLORCHANGED,
    payload: {
      color,
      changeType,
    },
  };
};

export const statusChange = (status) => {
  return {
    tyepe: STATUSCHANGED,
    payload: status,
  };
};
