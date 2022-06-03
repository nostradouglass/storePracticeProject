import { Dispatch } from "redux";
import { ActionType } from "../action-types";
import { SetIsMobileAction } from "../actions";

export const setMobile = (isMobile: boolean) => async (dispatch: Dispatch<SetIsMobileAction>) => {
  dispatch({ type: ActionType.SET_IS_MOBILE, payload: isMobile });
};

export const setSearchTerm = (term: string) => async (dispatch: Dispatch) => {
  dispatch({ type: ActionType.SET_SEARCH_TERM, payload: term})
}