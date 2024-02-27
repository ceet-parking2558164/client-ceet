import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import { GlobalState } from '../../types/redux/initialStateGlobal';

const initialState:GlobalState = {
    openDrawer: false
};

const globalSlice = createSlice({

    name: 'global',
    initialState,
    reducers: {
        toggleOpenDrawer: (state, action:PayloadAction<boolean>) => {
            state.openDrawer = action.payload;
        }
    }
});
export const {toggleOpenDrawer} = globalSlice.actions;
export {globalSlice};
