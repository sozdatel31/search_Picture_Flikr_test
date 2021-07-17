import {applyMiddleware, combineReducers, createStore} from "redux";
import thunk from "redux-thunk";
import {settingsReducer} from "./settingsReducer";
import {localStorageReducer} from "./localstorageReducer";
import {appReducer} from "./appReducer";

const rootReducer = combineReducers({
    settings: settingsReducer,
    localstorage: localStorageReducer,
    app: appReducer
})

export const store = createStore(rootReducer, applyMiddleware(thunk));

export type AppRootStateType = ReturnType<typeof rootReducer>