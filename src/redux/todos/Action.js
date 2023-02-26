import React from "react";
import {
  ADDED,
  ALLCOMPLEDED,
  COLORSELECTED,
  TOGGLED,
  DELETED,
  CLEARCOMPLEDED,
} from "./ActionTypes";

export const added = (todoText) => {
  return {
    type: ADDED,
    payload: todoText,
  };
};

export const toggled = (todoId) => {
  return {
    type: TOGGLED,
    payload: todoId,
  };
};

export const colorselected = (todoId, color) => {
  return {
    type: COLORSELECTED,
    payload: {
      todoId,
      color,
    },
  };
};

export const deleted = (todoId) => {
  return {
    type: DELETED,
    payload: todoId,
  };
};
export const allCompleted = () => {
  return {
    type: ALLCOMPLEDED,
  };
};

export const ClearCompleted = () => {
  return {
    type: CLEARCOMPLEDED,
  };
};
