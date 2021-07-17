import React, {ChangeEvent, KeyboardEvent} from 'react';
import {Grid, TextField} from '@material-ui/core';
import {ImageCard} from "../ImageCard/ImageCard";
import {ErrorSnackbar} from "../Error/ErrorSnackbar";
import {SuccessSnackbar} from "../SuccessSnackBar/SuccessSnackBar";
import s from "./SearchBoard.module.css"
import {DomainPhotoType} from "../../redux/appReducer";
import {InputAdornment} from '@material-ui/core';
import {BackspaceOutlined} from '@material-ui/icons';
import IconButton from "@material-ui/core/IconButton";
import {PaginationRounded} from "../Pagination/Pagination";

type PropType = {
    photo: Array<DomainPhotoType>,
    isDisabled: boolean,
    error: string | null,
    title: string,
    currentPage: number,
    totalPages: number,
    nextPage: (page: number) => void,
    clearInput: () => void,
    onChangeHandler: (e: ChangeEvent<HTMLInputElement>) => void,
    onKeyPressHandler: (e: KeyboardEvent<HTMLInputElement>) => void,
    remotePhoto: (id: string, picture: DomainPhotoType) => void
}

export function SearchBoard(props: PropType) {
    const {
        photo,
        isDisabled,
        error,
        title,
        nextPage,
        onChangeHandler,
        onKeyPressHandler,
        remotePhoto,
        currentPage,
        totalPages,
        clearInput
    } = props;

    return (
        <div>
            <ErrorSnackbar/>
            <SuccessSnackbar value="Add picture success!"/>
            <TextField id="outlined-basic" label="Find images" variant="outlined" className={s.root}
                       error={!!error} helperText={error}
                       value={title} onChange={onChangeHandler} onKeyPress={onKeyPressHandler}
                       InputProps={{
                           endAdornment: (
                               <InputAdornment position="end" onClick={clearInput}>
                                   <IconButton onClick={clearInput}>
                                       <BackspaceOutlined/>
                                   </IconButton>
                               </InputAdornment>
                           )
                       }}
            />

            {!!photo.length &&
            <div>
                <div className={s.pagination}>
                    <PaginationRounded currentPage={currentPage} totalPages={totalPages} isDisabled={isDisabled}
                                       nextPage={nextPage}/>
                </div>
                <Grid container className={s.images}>
                    {photo.map((img) => {
                        return <ImageCard key={img.id} picture={img} remotePhoto={() => remotePhoto(img.id, img)}
                                          description="Bookmark it!"/>
                    })}
                </Grid>
            </div>}
        </div>
    )
}