import axios from 'axios';
import store from './store';
//import { API_URL } from '../api-config'
export const login = async(user) => {
    console.log(user)
    const res = await axios.post('http://localhost:8000/api/users/login', user);
    //guardamos el token en localstorage
    store.dispatch({ 
        //this.userService.setUser(res.user)
        type: 'LOGIN',
        payload: res.data.user
    });
    localStorage.setItem('authToken','Bearer ' + res.data.user.token);
}
    export const logout = async() => {
        const res = await axios.get('http://localhost:8000/api/users/logout', {
            headers: {
                Authorization: localStorage.getItem('authToken')
            }
        })
        localStorage.removeItem('authToken');
        store.dispatch({
            type: 'LOGOUT'
        })
        return res;
    }
    export const getUserInfo = async() => {
        try {
            const res = await axios.get('http://localhost:8000/api/users/info', {
                headers: {
                    authorization: localStorage.getItem('authToken')
                }
            })
            store.dispatch({
                type: 'GET_INFO',
                user: res.data
            })
            return res;
        } catch (error) {
            console.error(error)
        }
    }
   export const addProfilePhoto = async(formData) => {
    try {
        await axios.post(`http://localhost:8000/api/users/image`, formData, {
            headers: {
                authorization: localStorage.getItem('authToken')
            }
        });
        store.dispatch({
            type: 'USER_PHOTO'
            
        })
    } catch (error) {
        console.error(error)
    }
    getUserInfo()
}