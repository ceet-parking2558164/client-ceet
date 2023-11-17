import {parkingApi} from '../api/parkingApi.ts';

class UserService {
    async getUserByToken(token:string){
        const data = {
            token : token
        };
        const user= await parkingApi.post('user/get-user', data);
        return user;
    }
}
export {UserService};
