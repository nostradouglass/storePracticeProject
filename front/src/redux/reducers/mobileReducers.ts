import { ActionType } from "../action-types";
import { Action } from "../actions";

export const mobileReducer = (state = { isMobile: true }, action: Action) => {
  switch (action.type) {
    case ActionType.SET_IS_MOBILE:
      return { ...state, isMobile: action.payload };
    default:
      return state;
  }
};
