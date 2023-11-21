import {ChangeEvent, useRef, useState} from 'react';
import {ImageType, ImageUrlType} from '../types/pages/Profile/FormProfileUpdate.ts';

const useActionUser = () => {
    const [stateEdit, setStateEdit] = useState<number | null>(null);
    const [imageUrl, setImageUrl] = useState<ImageUrlType>(null);
    const [image, setImage] = useState<ImageType>(null);
    const fileInputRef = useRef<HTMLInputElement | null>(null);

    const handleEdit = (num:number) => {
        setStateEdit(num);
    };

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

    return {
        handleEdit,
        openFileDialog,
        handlePhotoUser,
        stateEdit,
        imageUrl,
        image,
        fileInputRef
    };
};


export {useActionUser};
