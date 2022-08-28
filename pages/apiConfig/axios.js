import axios from 'axios';

export default axios.create({
    baseURL: 'http://localhost/nextjs-api/',
    headers: {
        'X-Requested-With': 'XMLHttpRequest',
    },
    withCredentials: true,
});