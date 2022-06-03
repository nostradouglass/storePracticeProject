

import { ActionType } from "../action-types";

interface SetIsMobileAction {
    type: ActionType.SET_IS_MOBILE;
    payload: boolean
}



export type Action = SetIsMobileAction