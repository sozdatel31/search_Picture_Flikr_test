import {ThunkAction} from "redux-thunk";
import {appAPI, PhotoType, ResponseType} from "../app-api/app-api";
import {AppRootStateType} from "./store";
import {handleServerAppError} from "../components/Error/error-utils";
import {setAppError, setAppErrorActionType} from "./settingsReducer";
import {Dispatch} from "redux";

const initialState: AppInitialStateType = {
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

export const appReducer = (state: AppInitialStateType = initialState, action: ActionsType): AppInitialStateType => {
    switch (action.type) {
        case "APP/SET-PHOTOS":
            return {
                ...state,
                photo: [
                    ...action.photos.map(ph => {
                        return {
                            ...ph,
                            url: ph.originalformat ?
                                `https://live.staticflickr.com/${ph.server}/${ph.id}_${ph.secret}.${ph.originalformat}` :
                                `https://live.staticflickr.com/${ph.server}/${ph.id}_${ph.secret}.jpg`
                        }
                    })
                ]
            }
        case "APP/REMOVE-PHOTO":
            return {
                ...state,
                photo: [...state.photo.filter(ph => ph.id !== action.photoId)]
            }
        case "APP/SET-PAGES":
            return {...state, ...action.payload}
        case "APP/NEXT-PAGES":
            return {...state, page: action.page}
        case "APP/DISABLED":
            return {...state, isDisabled: action.isDisabled}
        default:
            return state
    }
}

export const setPhotosAC = (photos: Array<PhotoType>) => ({type: "APP/SET-PHOTOS", photos} as const);
export const setPagesAC = (payload: { page: number, pages: number }) => ({type: "APP/SET-PAGES", payload} as const);
export const nextPageAC = (page: number) => ({type: "APP/NEXT-PAGES", page} as const);
export const remotePhotoAC = (photoId: string) => ({type: "APP/REMOVE-PHOTO", photoId} as const);
export const isDisabledAC = (isDisabled: boolean) => ({type: "APP/DISABLED", isDisabled} as const);

type ActionsType =
    ReturnType<typeof setPhotosAC>
    | ReturnType<typeof remotePhotoAC>
    | ReturnType<typeof setPagesAC>
    | ReturnType<typeof nextPageAC>
    | ReturnType<typeof isDisabledAC>
    | setAppErrorActionType;

type ThunkType = ThunkAction<void, AppRootStateType, unknown, ActionsType>

export const setTasksTC = (text: string): ThunkType =>
    (dispatch) => {
        dispatch(setPhotosAC([]));
        dispatch(isDisabledAC(true));
        appAPI.getPicture(text)
            .then(res => responseFn(res.data, dispatch))
            .catch(error => handleServerAppError(error, dispatch));
    }

export const nextTasksTC = (text: string, page: number): ThunkType =>
    (dispatch, getState: () => AppRootStateType) => {
        dispatch(nextPageAC(page))
        dispatch(isDisabledAC(true));
        appAPI.getPicture(text, getState().app.page)
            .then(res => responseFn(res.data, dispatch))
            .catch(error => handleServerAppError(error, dispatch));
    }

function responseFn(res: ResponseType, dispatch: Dispatch): void {
    if (res.stat === "ok") {
        if (res.photos.photo.length) {
            dispatch(setPhotosAC(res.photos.photo));
            dispatch(setPagesAC({page: res.photos.page, pages: res.photos.pages}));
            dispatch(isDisabledAC(false));
        } else {
            dispatch(setAppError("Error:( Please, try again/Please enter a valid query"))
        }
    } else {
        handleServerAppError(res, dispatch)
    }
}