

import { ActionType } from "../action-types";

export interface SetIsMobileAction {
    type: ActionType.SET_IS_MOBILE;
    payload: boolean
}
