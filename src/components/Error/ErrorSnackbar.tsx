import React from 'react'
import Snackbar from '@material-ui/core/Snackbar'
import MuiAlert, {AlertProps} from '@material-ui/lab/Alert'
import {useDispatch, useSelector} from "react-redux";
import { AppRootStateType } from '../../redux/store';
import { setAppError } from '../../redux/settingsReducer';


function Alert(props: AlertProps) {
    return <MuiAlert elevation={6} variant="filled" {...props} />
}

export function ErrorSnackbar() {
    const error = useSelector<AppRootStateType, string | undefined>(state => state.settings.error);
    const dispatch = useDispatch()

    const handleClose = (event?: React.SyntheticEvent, reason?: string) => {
        if (reason === 'clickaway') {
            return
        }
        dispatch(setAppError({error: undefined}));
    }

    return (
        <Snackbar open={error !== undefined} autoHideDuration={4000} onClose={handleClose}
        style={{bottom: "80px"}}>
            <Alert onClose={handleClose} severity="error">
                {error}
            </Alert>
        </Snackbar>
    )
}
