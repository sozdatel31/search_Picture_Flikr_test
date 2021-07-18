import {Dispatch} from 'redux';
import {ResponseType} from "../../app-api/app-api";
import {setAppError, setAppErrorActionType, setAppStatus, setAppStatusActionType} from "../../redux/settingsReducer";

export const handleServerAppError = (data: ResponseType, dispatch: ErrorUtilsDispatchType) => {
    if (data.stat === "fail") {
        dispatch(setAppError({error: data.message}));
    } else {
        dispatch(setAppError({error: 'Server is not responding'}));
    }
    dispatch(setAppStatus({status: 'failed'}));
}

type ErrorUtilsDispatchType = Dispatch<setAppErrorActionType | setAppStatusActionType>