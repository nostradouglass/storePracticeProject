import {makeVar} from '@apollo/client'
import { RegisterSignInType} from '../Types'

export const isMobileVar = makeVar(false)

export const searchTermVar = makeVar("")

export const registerSignInVar = makeVar(RegisterSignInType.SIGNIN)
export const signInModalOpenVar = makeVar(false)
export const isSignedIn = makeVar(false)

