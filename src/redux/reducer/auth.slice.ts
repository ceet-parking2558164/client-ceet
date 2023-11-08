import {createSlice} from "@reduxjs/toolkit";

interface StateUser {
    user: string
}

const initialState:StateUser = {
    user: ''
}

const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {
        logout: (state) => {
            localStorage.removeItem('userAuth')
            state.user = ''
        }
    }
})

export const {logout} = authSlice.actions;
export {authSlice}
