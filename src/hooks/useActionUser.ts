import {ChangeEvent, useRef, useState} from 'react';
import {FieldValues} from 'react-hook-form';
import {useAppDispatch} from './useAppRedux.ts';
import {updateUserThunk} from '../redux/actions/user/thunk.ts';

const useActionUser = () => {

    const dispatch = useAppDispatch();

    const [imageUrl, setImageUrl] = useState<string | null>(null);
    const [image, setImage] = useState<File>();
    const fileInputRef = useRef<HTMLInputElement | null>(null);

    const openFileDialog = () => {
        if (fileInputRef.current) {
            fileInputRef.current.click();
        }
    };
    const handlePhotoUser = (e: ChangeEvent<HTMLInputElement>) => {
        const filePhotoUser = e.target.files?.[0];
        if (filePhotoUser){
            setImage(filePhotoUser);
            if (filePhotoUser){
                const photoUrl = URL.createObjectURL(filePhotoUser);
                setImageUrl(photoUrl);
            }
        }
    };

    const handleUpdateUser = (data:FieldValues) => {
        const formData = new FormData();
        formData.append('firstName', data.firstName);
        formData.append('lastName', data.lastName);
        formData.append('phoneNumber', data.phoneNumber);
        formData.append('email', data.email);
        if (image){
            formData.append('imageProfile', image);
        }
        dispatch(updateUserThunk(formData));
    };

    return {
        openFileDialog,
        handlePhotoUser,
        handleUpdateUser,
        imageUrl,
        image,
        fileInputRef
    };
};


export {useActionUser};
