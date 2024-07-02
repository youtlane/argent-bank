
import axios from 'axios';
import { store } from '../redux/store';
import { logout } from '../redux/authSlice';

const API_URL = 'http://localhost:3001/api/v1';

const userLogin = async (email, password) => {
    try {
        const response = await axios.post(API_URL + "/user/login", {
            email,
            password
        });

        if (response.data.status === 200) {
            const token = response.data.body.token;
            let user = await getProfilByToken(token);
            user = user.body

            // Stocker le token dans le local storage
            localStorage.setItem('token', token);
            // convertir user en string avant de le stoquer en localStorage
            localStorage.setItem('user', JSON.stringify(user));

            return { token, user };
        } else {
            throw new Error(response.data.message);
        }
    } catch (error) {
        console.error('Error logging in:', error);
        throw error;
    }
};


const getProfilByToken = async (token) => {
    try {
        const response = await axios.post(
            API_URL + "/user/profile",
            {},
            {
                headers: {
                    Authorization: `Bearer ${token}`
                }
            }
        );

        return response.data;
    } catch (error) {
        console.error('Error get user profil:', error);
        throw error;
    }
}

const userLogout = () => {
    localStorage.removeItem('token');
    localStorage.removeItem('user');
    store.dispatch(logout());
};

export default {
    userLogin,
    getProfilByToken,
    userLogout
};

