import axios from 'axios';

const axionInstance = axios.create({
    baseURL: 'https://rickandmortyapi.com/api/'
});

export default axionInstance;