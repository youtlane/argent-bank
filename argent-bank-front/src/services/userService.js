import axios from 'axios';

const API_URL = 'http://localhost:3001/api/v1';

const updateProfile = async (profileData, token) => {
    const response = await axios.put(
        `${API_URL}/user/profile`,
        profileData,
        {
            headers: {
                Authorization: `Bearer ${token}`,
            },
        }
    );
    if (response.data.status === 200) {
        return response.data.body;
    } else {
        throw new Error(response.data.message);
    }
};

export default {
    updateProfile,
};