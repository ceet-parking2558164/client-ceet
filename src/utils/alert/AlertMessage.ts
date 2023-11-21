import Swal from 'sweetalert2';
import {Status} from '../../types/utils/alert/AlertMessage.ts';



const alertMessage = (message:string, status:Status) => {
    Swal.fire({
        position: 'center',
        icon: status,
        title: message,
        showConfirmButton: false,
        timer: 2500,
    });
};


export {alertMessage};
