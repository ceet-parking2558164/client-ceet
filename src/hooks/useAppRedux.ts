import {useDispatch, useSelector, TypedUseSelectorHook} from "react-redux";
import {AppDispatch, RootState, } from "../redux/store/store.ts";


const useAppDispatch = () => useDispatch<AppDispatch>();
const useAppSelector: TypedUseSelectorHook<RootState> = useSelector


export {
    useAppDispatch,
    useAppSelector
}
