import { useEffect } from 'react';
import { Outlet } from 'react-router-dom';
import { useAppDispatch } from '../../hooks/useRedux/useAppRedux';
import { getAllChatThunk } from '../../redux/actions/chat/chatThunk';


const LayoutChat = () => {

    const dispatch = useAppDispatch();

    useEffect(() => {
        dispatch(getAllChatThunk());
    },[dispatch]);

    return (
        <>
            <Outlet />
        </>
    );
};

export {LayoutChat};