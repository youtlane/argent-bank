// src/components/Layout.js
import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import Header from '../components/Header/Header';
import AppRoutes from '../Router';
import Footer from '../components/Footer/Footer';

export default function Layout() {
    return (
        <BrowserRouter>
            <Header />
            <AppRoutes />
            <Footer />
        </BrowserRouter>
    );
}