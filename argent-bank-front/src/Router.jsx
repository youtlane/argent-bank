// src/Router.js
import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import SignIn from './pages/SignIn';
import User from './pages/User';
import { Provider } from 'react-redux';
import PublicRoute from './components/PublicRoute';
import ProtectedRoute from './components/ProtectedRoute';
import { store } from './redux/store';

const AppRoutes = () => {
    return (
        <Provider store={store}>
            <Routes>
                <Route 
                    path="/" 
                    element={
                        <PublicRoute>
                            <Home />
                        </PublicRoute>
                    } 
                />
                <Route 
                    path="/sign-in" 
                    element={
                        <PublicRoute>
                            <SignIn />
                        </PublicRoute>
                    } 
                />
                <Route 
                    path="/user" 
                    element={
                        <ProtectedRoute>
                            <User />
                        </ProtectedRoute>
                    } 
                />
            </Routes>
        </Provider>
    );
};

export default AppRoutes;
