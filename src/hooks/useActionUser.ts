import {ChangeEvent, useRef, useState} from 'react';

const useActionUser = () => {
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

    return {
        openFileDialog,
        handlePhotoUser,
        imageUrl,
        image,
        fileInputRef
    };
};


export {useActionUser};
