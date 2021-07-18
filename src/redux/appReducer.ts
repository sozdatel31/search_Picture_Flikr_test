import {ThunkAction} from "redux-thunk";
import {appAPI, PhotoType, ResponseType} from "../app-api/app-api";
import {AppRootStateType} from "./store";
import {handleServerAppError} from "../components/Error/error-utils";
import {setAppError, setAppErrorActionType} from "./settingsReducer";
import {Dispatch} from "redux";
import {createSlice, PayloadAction} from "@reduxjs/toolkit";

const initialState:AppInitialStateType = {
    page: 1,
    pages: 0,
    photo: [],
    isDisabled: false
}

export type DomainPhotoType = PhotoType & { url: string }

export type AppInitialStateType = {
    page: number,
    pages: number,
    photo: Array<DomainPhotoType>,
    isDisabled: boolean
}

const slice = createSlice({
    name: "app",
    initialState: initialState,
    reducers: {
        setPhotosAC(state, action: PayloadAction<{ photos: Array<PhotoType>}>) {
            state.photo = action.payload.photos.map(ph=> ({...ph,
                url: ph.originalformat?`https://live.staticflickr.com/${ph.server}/${ph.id}_${ph.secret}.${ph.originalformat}` :
                    `https://live.staticflickr.com/${ph.server}/${ph.id}_${ph.secret}.jpg`,
            }))
        },
        removePhotoAC(state, action: PayloadAction<{photoId: string}>) {
            const index = state.photo.findIndex(ph=>ph.id === action.payload.photoId)
            if (index > -1) {
                state.photo.splice(index, 1)
            }
        },
        setPagesAC(state, action: PayloadAction<{ page: number, pages: number }>) {
            state.page = action.payload.page
            state.pages = action.payload.pages
        },
        nextPageAC(state, action: PayloadAction<{ page: number }>) {
            state.page = action.payload.page
        },
        isDisabledAC(state, action: PayloadAction<{ isDisabled: boolean }>) {
            state.isDisabled = action.payload.isDisabled
        },
    }
})
export const {setPhotosAC, removePhotoAC, setPagesAC, nextPageAC, isDisabledAC} = slice.actions
export const appReducer = slice.reducer

type ActionsType =
    ReturnType<typeof setPhotosAC>
    | ReturnType<typeof removePhotoAC>
    | ReturnType<typeof setPagesAC>
    | ReturnType<typeof nextPageAC>
    | ReturnType<typeof isDisabledAC>
    | setAppErrorActionType;

type ThunkType = ThunkAction<void, AppRootStateType, unknown, ActionsType>

export const setTasksTC = (text: string): ThunkType =>
    (dispatch) => {
        dispatch(setPhotosAC({photos: []}));
        dispatch(isDisabledAC({isDisabled: true}));
        appAPI.getPicture(text)
            .then(res => responseFn(res.data, dispatch))
            .catch(error => handleServerAppError(error, dispatch));
    }

export const nextTasksTC = (text: string, page: number): ThunkType =>
    (dispatch) => {
        dispatch(nextPageAC({page}))
        dispatch(isDisabledAC({isDisabled:true}));
        appAPI.getPicture(text, page)
            .then(res => responseFn(res.data, dispatch))
            .catch(error => handleServerAppError(error, dispatch));
    }

function responseFn(res: ResponseType, dispatch: Dispatch): void {
    if (res.stat === "ok") {
        if (res.photos.photo.length) {
            dispatch(setPhotosAC({photos: res.photos.photo}));
            dispatch(setPagesAC({page: res.photos.page, pages: res.photos.pages}));
            dispatch(isDisabledAC({isDisabled:false}));
        } else {
            dispatch(setAppError({error: "Error:( Please, try again/Please enter a valid query"}))
        }
    } else {
        handleServerAppError(res, dispatch)
    }
}