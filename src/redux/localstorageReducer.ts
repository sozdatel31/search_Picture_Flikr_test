import {DomainPhotoType} from "./appReducer";
import {ThunkAction} from "redux-thunk";
import {AppRootStateType} from "./store";

type InitialStateType = Array<DomainPhotoType>;
const initialState: InitialStateType = [];

export const localStorageReducer = (state: InitialStateType = initialState, action: ActionsType): InitialStateType => {
    switch (action.type) {
        case "APP/LOCALSTORAGE/ADD-PHOTO":
            return [...state, action.photo]
        case "APP/LOCALSTORAGE/REMOVE-PHOTO":
            return [...state.filter(ph => ph.id !== action.photoId)]
        case "APP/LOCALSTORAGE/SET-PHOTOS":
            return [...action.photos]
        default:
            return state
    }
}

export type ActionsType =
    ReturnType<typeof addPictureAC>
    | ReturnType<typeof remotePictureAC>
    | ReturnType<typeof setPicturesAC>;

export const addPictureAC = (photo: DomainPhotoType) => ({type: "APP/LOCALSTORAGE/ADD-PHOTO", photo} as const);
export const remotePictureAC = (photoId: string) => ({type: "APP/LOCALSTORAGE/REMOVE-PHOTO", photoId} as const);
export const setPicturesAC = (photos: Array<DomainPhotoType>) => ({
    type: "APP/LOCALSTORAGE/SET-PHOTOS",
    photos
} as const);

type ThunkType = ThunkAction<void, AppRootStateType, unknown, ActionsType>;

export const addPicture = (photo: DomainPhotoType): ThunkType =>
    (dispatch, getState: () => AppRootStateType) => {
        let state = localStorage.getItem("state");
        state && dispatch(setPicturesAC(JSON.parse(state)));
        dispatch(addPictureAC(photo));
        localStorage.setItem("state", JSON.stringify(getState().localstorage));
    }

export const removePicture = (photoId: string): ThunkType =>
    (dispatch, getState: () => AppRootStateType) => {
        dispatch(remotePictureAC(photoId));
        localStorage.setItem("state", JSON.stringify(getState().localstorage));
    }

export const setPictures = (): ThunkType =>
    (dispatch) => {
        let state = localStorage.getItem("state");
        state && dispatch(setPicturesAC(JSON.parse(state)));
    }
