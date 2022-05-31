
import { SET_IS_MOBILE } from "../constants/isMobileConstants"

export const mobileReducer = (state= {isMobile: true}, action: any) => {
    switch(action.type) {
        case SET_IS_MOBILE:
            return {...state, isMobile: action.payload}
        default:
            return state
    }
}