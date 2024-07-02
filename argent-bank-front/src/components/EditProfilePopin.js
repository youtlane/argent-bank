// src/components/EditProfilePopin.js
import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { updateProfile } from '../redux/authSlice';
import userService from '../services/userService';
import './EditProfilePopin.css';

const EditProfilePopin = ({ user, onClose }) => {
    const [firstName, setFirstName] = useState(user.firstName);
    const [lastName, setLastName] = useState(user.lastName);
    const dispatch = useDispatch();
    const token = useSelector(state => state.auth.token);

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const updatedUser = await userService.updateProfile({ firstName, lastName }, token);
            dispatch(updateProfile(updatedUser));
            onClose();
        } catch (error) {
            console.error('Failed to update profile:', error);
        }
    };

    return (
        <div className="popin-overlay">
            <div className="popin-content">
                <h2>Edit Profile</h2>
                <form onSubmit={handleSubmit}>
                    <div>
                        <label htmlFor="firstName">First Name</label>
                        <input
                            type="text"
                            id="firstName"
                            value={firstName}
                            onChange={(e) => setFirstName(e.target.value)}
                        />
                    </div>
                    <div>
                        <label htmlFor="lastName">Last Name</label>
                        <input
                            type="text"
                            id="lastName"
                            value={lastName}
                            onChange={(e) => setLastName(e.target.value)}
                        />
                    </div>
                    <div className="button-group">
                        <button type="submit">Save</button>
                        <button type="button" onClick={onClose}>Cancel</button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default EditProfilePopin;
