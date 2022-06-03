import { ActionType } from "../action-types";
import {  SetSearchTermAction } from "../actions";

export const searchTermReducer = (state = { searchTerm: "" }, action: SetSearchTermAction) => {
  switch (action.type) {
    case ActionType.SET_SEARCH_TERM:
      return { ...state, searchTerm: action.payload };
    default:
      return state;
  }
};