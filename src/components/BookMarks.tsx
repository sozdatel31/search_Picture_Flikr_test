import React, {useEffect} from 'react';
import {ImageCard} from "./ImageCard/ImageCard";
import {useDispatch, useSelector} from "react-redux";
import {AppRootStateType} from "../redux/store";
import {DomainPhotoType} from "../redux/appReducer";
import {removePicture, setPictures} from "../redux/localstorageReducer";
import {Grid} from "@material-ui/core";
import {SuccessSnackbar} from "./SuccessSnackBar/SuccessSnackBar";
import {setAppStatus} from "../redux/settingsReducer";
import s from "./SearchBoard/SearchBoard.module.css";

export function BookMarks() {

    const photo = useSelector<AppRootStateType, Array<DomainPhotoType>>(state => state.localstorage);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(setPictures());
    }, [])

    function remotePhoto(photoId: string) {
        dispatch(removePicture(photoId));
        dispatch(setAppStatus("succeeded"));
    }

    return (
        <div className={s.images}>
            <SuccessSnackbar value="Delete picture success!"/>
            <Grid container direction="row" justifyContent="center" alignItems="center">
                {!!photo.length && photo.map((img) => {
                    return <ImageCard key={img.id} picture={img} remotePhoto={remotePhoto} description="Remove it"/>
                })}
            </Grid>
        </div>
    )
}
