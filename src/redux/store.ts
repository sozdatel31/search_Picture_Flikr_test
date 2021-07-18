import {combineReducers} from "redux";
import thunk from "redux-thunk";
import {settingsReducer} from "./settingsReducer";
import {localStorageReducer} from "./localstorageReducer";
import {appReducer} from "./appReducer";
import {configureStore} from "@reduxjs/toolkit";

const rootReducer = combineReducers({
    settings: settingsReducer,
    localstorage: localStorageReducer,
    app: appReducer
})

export const store = configureStore({
        reducer: rootReducer,
        middleware: getDefaultMiddleware => getDefaultMiddleware().prepend(thunk)
    }
)

export type AppRootStateType = ReturnType<typeof rootReducer>