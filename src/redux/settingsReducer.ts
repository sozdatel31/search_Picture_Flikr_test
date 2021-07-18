import {createSlice, PayloadAction} from "@reduxjs/toolkit";

export type RequestStatusType = 'idle' | 'loading' | 'succeeded' | 'failed'

const initialState = {
    status: 'idle' as RequestStatusType,
    error: undefined as string | undefined
}

const slice = createSlice({
    name: "settingReducer",
    initialState: initialState,
    reducers: {
        setAppStatus(state, action: PayloadAction<{ status: RequestStatusType }>) {
            state.status = action.payload.status
        },

        setAppError(state, action: PayloadAction<{ error: string | undefined }>) {
            state.error = action.payload.error
        },
    }
})

export const {setAppStatus, setAppError} = slice.actions
export const settingsReducer = slice.reducer
// export const settingsReducer = (state: settingsStateType = initialState, action: ActionsType): settingsStateType => {
//     switch (action.type) {
//         case 'APP/SETTINGS/SET-STATUS':
//             return {...state, status: action.status}
//         case 'APP/SETTINGS/SET-ERROR':
//             return {...state, error: action.error}
//         default:
//             return state
//     }
// }

export type setAppStatusActionType = ReturnType<typeof setAppStatus>
export type setAppErrorActionType = ReturnType<typeof setAppError>
