import { applyMiddleware, combineReducers, compose, createStore} from 'redux'
import thunk from 'redux-thunk'
import { mobileReducer } from '../redux/reducers/mobileReducers'

const initialState = {
    
}

const reducer = combineReducers({
    mobileStatus: mobileReducer
})

//@ts-ignore
const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(reducer, initialState, composeEnhancer(applyMiddleware(thunk)));

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch

export default store;