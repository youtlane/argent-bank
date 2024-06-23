// src/components/Home/FeatureItem.jsx

import React from 'react';

const FeatureItem = ({ icon, title, children }) => {
    return (
        <div className="feature-item">
            <img src={icon} alt={`${title} Icon`} className="feature-icon" />
            <h3 className="feature-item-title">{title}</h3>
            <p>{children}</p>
        </div>
    );
};

export default FeatureItem;
