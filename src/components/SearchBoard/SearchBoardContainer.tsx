import React, {ChangeEvent, KeyboardEvent, useCallback, useEffect, useState} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {DomainPhotoType, nextTasksTC, removePhotoAC, setPagesAC, setPhotosAC, setTasksTC} from "../../redux/appReducer";
import {AppRootStateType} from "../../redux/store";
import {addPicture} from "../../redux/localstorageReducer";
import {setAppStatus} from "../../redux/settingsReducer";
import {SearchBoard} from './SearchBoard';
import {useDebounce} from "../../feature/useDebounce";



export function SearchBoardContainer() {
    const photo = useSelector<AppRootStateType, Array<DomainPhotoType>>(state => state.app.photo);
    const isDisabled = useSelector<AppRootStateType, boolean>(state => state.app.isDisabled);
    const currentPage = useSelector<AppRootStateType, number>(state => state.app.page);
    const totalPages = useSelector<AppRootStateType, number>(state => state.app.pages);
    const dispatch = useDispatch();

    const [error, setError] = useState<string | null>(null);
    const [title, setTitle] = useState<string>("");

    const debouncedSearch = useDebounce(title, 500);

    const addItem = useCallback((title: string) => {
        const trimmedTitle = title.trim();
        if (trimmedTitle !== "") {
            dispatch(setTasksTC(title));
        } else {
            setError("Title is required");
        }
    }, [dispatch])

    useEffect(() => {
        dispatch(setPhotosAC({photos: []}));
        dispatch(setPagesAC({page: 1, pages: 0}));
    }, [dispatch]);

    useEffect(() => {
        debouncedSearch && addItem(title);
    }, [debouncedSearch, title, addItem])

    const clearInput = () => {
        setTitle("");
        setError(null);
        dispatch(setPhotosAC({photos: []}));
        dispatch(setPagesAC({page: 1, pages: 0}));
    }

    const nextPage = (page: number) => {
        dispatch(nextTasksTC(title, page));
    }

    const remotePhoto = (id: string, picture: DomainPhotoType) => {
        dispatch(removePhotoAC({photoId: id}));
        dispatch(addPicture(picture));
        dispatch(setAppStatus({status: "succeeded"}));
    }

    const onChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
        if(!e.currentTarget.value) dispatch(setPhotosAC({photos: []}));
        setTitle(e.currentTarget.value);
    }

    const onKeyPressHandler = (e: KeyboardEvent<HTMLInputElement>) => {
        if (error !== null) setError(null);
        e.key === "Enter" && addItem(title);
    }

    return (
        <SearchBoard photo={photo} isDisabled={isDisabled} error={error} title={title} nextPage={nextPage}
                     currentPage={currentPage} totalPages={totalPages}
                     onChangeHandler={onChangeHandler} remotePhoto={remotePhoto}
                     onKeyPressHandler={onKeyPressHandler} clearInput={clearInput}/>
    )
}