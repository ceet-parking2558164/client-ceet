import {ChangeEvent, useState} from 'react';
import {FieldValues, UseFormReset} from 'react-hook-form';
import {ListItemCard} from '../../types/utils/constants/ListItemCard.ts';
import {itemsCardImage} from '../../utils/constants/listItemsCard.ts';
import {registerVehicle} from '../../redux/actions/user/vehicle/thunk.ts';
import {useAppSelector} from '../useRedux/useAppRedux.ts';
import {ListOptionsVehicles} from '../../types/utils/constants/ListOptionsVehicles.ts';

const useActionVehicle = (idType:ListOptionsVehicles|undefined, reset:UseFormReset<FieldValues>) => {

    const {user} = useAppSelector(state => state.auth);

    const [selectImage, setSelectImage] = useState<ListItemCard[]>(itemsCardImage);
    const [imagesFormData, setImagesFormData] = useState<File[]>([]);

    const [loading, setLoading] = useState<boolean>(false);

    const handleFile = (event: ChangeEvent<HTMLInputElement>, id: number) => {
        if (event.target.files) {
            const imgSelect = event.target.files[0];
            setImagesFormData((prevState) => [...prevState, imgSelect]);
            if (imgSelect) {
                const imageUrl: string = URL.createObjectURL(imgSelect);
                const updateItems = selectImage.map(item => {
                    if (item.id === id) return {...item, image: imageUrl};
                    return item;
                });
                setSelectImage(updateItems);
            }
        }
    };

    const handleSendForm = async (data:FieldValues) => {
        const formData = new FormData();
        if (idType?.type === 'Bicicleta'){
            formData.append('typeBicycle', data.typeBicycle);
            formData.append('serial', data.serial);
        }else {
            formData.append('model', data.model);
            formData.append('carPlate', data.carPlate);
            formData.append('cylinderCapacity', data.cylinderCapacity);
        }
        if (idType && user?.user_id){
            formData.append('typeVehicle_id', idType.id);
            formData.append('user_id', user.user_id);
        }
        formData.append('color', data.color);
        formData.append('brand', data.brand);
        imagesFormData.forEach(image => {
            formData.append('images', image);
        });
        setLoading(true);
        registerVehicle(formData).then(() => {
            setLoading(false);
        });
        // reset();
    };

    return {
        selectImage,
        handleSendForm,
        handleFile,
        loading
    };
};

export {useActionVehicle};
