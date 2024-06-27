
import React, { useEffect, useState } from 'react';
import FeatureItem from '../components/features/FeatureItem';
import featuresData from '../data/Features.json';
import chatIcon from '../assets/icon-chat.png';
import moneyIcon from '../assets/icon-money.png';
import securityIcon from '../assets/icon-security.png';

const iconMap = {
    "icon-chat.png": chatIcon,
    "icon-money.png": moneyIcon,
    "icon-security.png": securityIcon
};

const Home = () => {
    const [features, setFeatures] = useState([]);

    useEffect(() => {
        setFeatures(featuresData);
    }, []);

    return (
        <main>
            <div className="hero">
                <section className="hero-content">
                    <h2 className="sr-only">Promoted Content</h2>
                    <p className="subtitle">No fees.</p>
                    <p className="subtitle">No minimum deposit.</p>
                    <p className="subtitle">High interest rates.</p>
                    <p className="text">Open a savings account with Argent Bank today!</p>
                </section>
            </div>
            <section className="features">
                <h2 className="sr-only">Features</h2>
                {features.map((feature, index) => (
                    <FeatureItem
                        key={index}
                        icon={iconMap[feature.icon]}
                        title={feature.title}
                    >
                        {feature.description}
                    </FeatureItem>
                ))}
            </section>
        </main>
    );
};

export default Home;
