
import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import logo from '../../assets/argentBankLogo.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUserCircle, faSignOutAlt } from '@fortawesome/free-solid-svg-icons';
import { useSelector } from 'react-redux';
import authService from '../../services/authService';


const Header = () => {
    const navigate = useNavigate();
    const user = useSelector(state => state.auth.user);

    const handleLogout = () => {
        authService.userLogout();
        navigate('/');
    };

    return (
        <nav className="main-nav">
            <Link className="main-nav-logo" to="/">
                <img
                    className="main-nav-logo-image"
                    src={logo}
                    alt="Argent Bank Logo"
                />
                <h1 className="sr-only">Argent Bank</h1>
            </Link>
            <div>
                {user ? (
                    <>
                        <Link className="main-nav-item" to="/profile">
                            <FontAwesomeIcon icon={faUserCircle} />
                            {user.firstName}
                        </Link>
                        <button className="main-nav-item" onClick={handleLogout} style={{ background: 'none', border: 'none', cursor: 'pointer', color: 'inherit' }}>
                            <FontAwesomeIcon icon={faSignOutAlt} />
                            Sign Out
                        </button>
                    </>
                ) : (
                    <Link className="main-nav-item" to="/sign-in">
                        <FontAwesomeIcon icon={faUserCircle} />
                        Sign In
                    </Link>
                )}
            </div>
        </nav>
    );
};

export default Header;
