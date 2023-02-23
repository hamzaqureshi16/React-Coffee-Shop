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

export const SendtoCart = async (Data) =>{
    return await axios.post(`${url}/menu`,Data);
}

export const getCart = async () =>{
    return await axios.get(`${url}/cart`);
}

export const removefromCart = async (id) =>{
    return await axios.delete(`${url}/remove`,{data:{id:id}});
}

export const quantity = async (id,action) =>{
    return await axios.put(`${url}/quantity`,{id:id,action:action});
}
