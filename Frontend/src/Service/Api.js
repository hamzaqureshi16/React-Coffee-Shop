import axios from 'axios';

const url = "http://localhost:3000";

export const login = async (Data) => { 
    return await axios.post(`${url}/login`,Data);
}

export const register = async (Data) => { 
    return await axios.post(`${url}/register`,Data);
}

export const getCatalog = async () => {
    return await axios.get(`${url}/catalog`);
}
