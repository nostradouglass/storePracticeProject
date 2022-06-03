import { Dispatch } from "redux";
import { ActionType } from "../action-types";
import { SetIsMobileAction } from "../actions";

export const setMobile = (isMobile: boolean) => async (dispatch: Dispatch<SetIsMobileAction>) => {
  dispatch({ type: ActionType.SET_IS_MOBILE, payload: isMobile });
};

