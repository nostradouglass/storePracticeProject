import { TypedUseSelectorHook, useDispatch, useSelector } from "react-redux";
import { bindActionCreators } from "redux";
import type { RootState } from "./store";
import { actionCreators } from "../redux";


// Use throughout your app instead of plain `useDispatch` and `useSelector`
// export const useAppDispatch = () => useDispatch<AppDispatch>();
 export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;

export const useActions = () => {
    const dispatch = useDispatch();
    return bindActionCreators(actionCreators, dispatch);
};
