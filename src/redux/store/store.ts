import {configureStore} from '@reduxjs/toolkit';
import {authSlice} from '../reducer/auth.slice.ts';
import {userSlice} from '../reducer/user.slice.ts';
import {messageSlice} from '../reducer/message.slice.ts';
import {chatSlice} from '../reducer/chat.slice.ts';
import {requestSlice} from '../reducer/requests.slice.ts';
import {vehicleSlice} from '../reducer/vehicle.slice.ts';
import { typeVehicleSlice } from '../reducer/typeVehicle.slice.ts';
import { globalSlice } from '../reducer/globa.slice.ts';
const store = configureStore({
    reducer: {
        global: globalSlice.reducer,
        auth: authSlice.reducer,
        allUsers: userSlice.reducer,
        chats: chatSlice.reducer,
        messages: messageSlice.reducer,
        requests: requestSlice.reducer,
        vehicles: vehicleSlice.reducer,
        typeVehicles: typeVehicleSlice.reducer
    },

});

export {store};




