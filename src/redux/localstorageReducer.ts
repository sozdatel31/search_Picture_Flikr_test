import {DomainPhotoType} from "./appReducer";
import {ThunkAction} from "redux-thunk";
import {AppRootStateType} from "./store";
import {createSlice, PayloadAction} from "@reduxjs/toolkit";

type InitialStateType = Array<DomainPhotoType>;
const initialState: InitialStateType = [];

const slice = createSlice({
    name: "localStorage",
    initialState: initialState,
    reducers: {
        addPictureAC(state, action: PayloadAction<{ photo: DomainPhotoType }>) {
            state.unshift({...action.payload.photo})
        },
        removePictureAC(state, action: PayloadAction<{ photoId: string }>) {
            const index = state.findIndex(ph => ph.id === action.payload.photoId)
            if (index > -1) {
                state.splice(index, 1)
            }
        },
        setPicturesAC(state, action: PayloadAction<Array<DomainPhotoType>>) {

            state = action.payload
            return state
        }

    }
})
export const {addPictureAC, removePictureAC, setPicturesAC} = slice.actions
export const localStorageReducer = slice.reducer


export type ActionsType =
    ReturnType<typeof addPictureAC>
    | ReturnType<typeof removePictureAC>
    | ReturnType<typeof setPicturesAC>;

type ThunkType = ThunkAction<void, AppRootStateType, unknown, ActionsType>;

export const addPicture = (photo: DomainPhotoType): ThunkType =>
    (dispatch, getState: () => AppRootStateType) => {
        let state = localStorage.getItem("state");
        state && dispatch(setPicturesAC(JSON.parse(state)));
        dispatch(addPictureAC({photo}));
        localStorage.setItem("state", JSON.stringify(getState().localstorage));
    }

export const removePicture = (photoId: string): ThunkType =>
    (dispatch, getState: () => AppRootStateType) => {
        dispatch(removePictureAC({photoId}));
        localStorage.setItem("state", JSON.stringify(getState().localstorage));
    }

export const setPictures = (): ThunkType =>
    (dispatch) => {

        let state = localStorage.getItem("state");
        state && dispatch(setPicturesAC(JSON.parse(state)));
    }
