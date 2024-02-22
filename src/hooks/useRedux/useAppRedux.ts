import {TypedUseSelectorHook, useDispatch, useSelector} from 'react-redux';
import {AppDispatch, RootState} from '../../redux/store/typeState.ts';


const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
const useAppDispatch = (): AppDispatch => useDispatch<AppDispatch>();
export {
    useAppDispatch,
    useAppSelector
};
