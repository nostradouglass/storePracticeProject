import { ActionType } from "../action-types";
import { SetIsMobileAction } from "../actions";

export const mobileReducer = (state = { isMobile: false }, action: SetIsMobileAction) => {
  switch (action.type) {
    case ActionType.SET_IS_MOBILE:
      return { ...state, isMobile: action.payload };
    default:
      return state;
  }
};
