
import axios from 'axios';
import { loginSuccess, loginFailure } from '../redux/authSlice';
import { store } from '../redux/store';

const API_URL = 'http://localhost:3001/api/v1/user/login';

const login = async (email, password) => {
    try {
        const response = await axios.post(API_URL, {
            email,
            password
        });

        if (response.data.status === 200) {
            const token = response.data.body.token;
            // Stocker le token dans le local storage
            localStorage.setItem('token', token);
            // Dispatcher l'action loginSuccess vec le token
            store.dispatch(loginSuccess(token));
            return response.data;
        } else {
            store.dispatch(loginFailure(response.data.message));
            throw new Error(response.data.message);
        }
    } catch (error) {
        // Dispatcher l'action loginFailure vec le message d err
        store.dispatch(loginFailure(error.message));
        console.error('Error logging in:', error);
        throw error;
    }
};

export default {
    login
};
