import { Dispatch } from "redux";
import { ActionType } from "../action-types";
import { Action } from "../actions";

export const setMobile = (isMobile: boolean) => async (dispatch: Dispatch<Action>) => {
  dispatch({ type: ActionType.SET_IS_MOBILE, payload: isMobile });
};
