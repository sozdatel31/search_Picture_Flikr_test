import { Dispatch } from 'redux';
import {ResponseType} from "../../app-api/app-api";
import {setAppError, setAppErrorActionType, setAppStatus, setAppStatusActionType} from "../../redux/settingsReducer";

export const handleServerAppError = (data: ResponseType, dispatch: ErrorUtilsDispatchType) => {
    if (data.stat === "fail") {
        dispatch(setAppError(data.message));
    } else {
        dispatch(setAppError('Server is not responding'));
    }
    dispatch(setAppStatus('failed'));
}

type ErrorUtilsDispatchType = Dispatch<setAppErrorActionType | setAppStatusActionType>