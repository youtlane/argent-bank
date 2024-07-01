import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUserCircle } from '@fortawesome/free-solid-svg-icons';
import authService from '../services/authService';
import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { loginFailure, loginSuccess } from '../redux/authSlice';
import { store } from '../redux/store';

const SignIn = () => {
    const { register, handleSubmit, formState: { errors } } = useForm();
    const navigate = useNavigate();
    const { status } = useSelector(state => state.auth);
    const [loginError, setLoginError] = useState('');

    const handleLogin = async (data) => {
        try {
            const { token, user } = await authService.userLogin(data.username, data.password);
            // Dispatcher l'action loginSuccess evec le token
            store.dispatch(loginSuccess({ token, user}));
            navigate('/user');
        } catch (error) {
            store.dispatch(loginFailure(error.message));
            setLoginError('Les identifiants sont incorrects');
        }
    };

    return (  
        <main className="main bg-dark">
            <section className="sign-in-content">
                <FontAwesomeIcon icon={faUserCircle} />
                <h1>Sign In</h1>
                <form onSubmit={handleSubmit(handleLogin)}>
                    <div className="input-wrapper">
                        <label htmlFor="username">Username</label>
                        <input
                            type="text"
                            id="username"
                            {...register('username', { required: 'Username is required' })}
                        />
                        {errors.username && <p>{errors.username.message}</p>}
                    </div>
                    <div className="input-wrapper">
                        <label htmlFor="password">Password</label>
                        <input
                            type="password"
                            id="password"
                            {...register('password', { required: 'Password is required' })}
                        />
                        {errors.password && <p>{errors.password.message}</p>}
                    </div>
                    <div className="input-remember">
                        <input type="checkbox" id="remember-me" {...register('rememberMe')} />
                        <label htmlFor="remember-me">Remember me</label>
                    </div>
                    <button type="submit" className="sign-in-button">Sign In</button>
                </form>
                {status === 'failure' && <p style={{ color: 'red' }}>{loginError}</p>}
            </section>
        </main>
    );
};

export default SignIn;
