import axios from 'axios';
export const BASE_URL = `https://api.themoviedb.org/3`

export const instance = axios.create({
    baseURL: 'https://api.themoviedb.org/3'
})