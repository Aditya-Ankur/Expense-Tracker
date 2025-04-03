import axios from 'axios';

const instance = axios.create({
    baseURL: 'https://expense-tracker-41xz.onrender.com',  // baseURL is the base URL for all requests which will be sent using this instance
    timeout: 10000,
    headers: {
        'Content-Type': 'application/json',
    }
});

export default instance;
