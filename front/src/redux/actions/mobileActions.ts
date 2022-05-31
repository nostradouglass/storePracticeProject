import { Dispatch } from "redux";
import { SET_IS_MOBILE } from "../constants/isMobileConstants";

export const setMobile = (isMobile: boolean) => async (dispatch: Dispatch) => {
  dispatch({ type: SET_IS_MOBILE, payload: isMobile });
};
