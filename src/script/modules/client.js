import axios from 'axios';

export default axios.create({
    baseURL: 'https://api.samvk.com',
    responseType: 'json',
    transformRequest: JSON.stringify,
    headers: {
        'Content-Type': 'application/json',
    },
});
