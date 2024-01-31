import {Data} from '../../types/utils/auth/localStorage/setData.ts';

const saveDataLocalStorage = (key:string, data:Data) => {
    localStorage.setItem(key, JSON.stringify(data));
};

const removeData = (key:string) => {
    localStorage.removeItem(key);
};

const getAccessToken = (key:string) => {
    const tokenAccess:string|null = localStorage.getItem(key);
    if (tokenAccess){
        return JSON.parse(tokenAccess);
    }else return null;
};


export {
    saveDataLocalStorage,
    removeData,
    getAccessToken
};
