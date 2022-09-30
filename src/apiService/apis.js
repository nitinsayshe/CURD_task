import axios from "axios"

const Url = 'http://localhost:8000';

export const addUser = async (user) => {
    try {
        return await axios.post(`${Url}/adduser`, user);
    } catch (error) {
        console.log(error)
    }
}
export const getUsers = async () => {
    try {
        return await axios.get(`${Url}/getusers`);
    } catch (error) {
        console.log(error)
    }
}
export const getUser = async (id) => {
    try {
        return await axios.get(`${Url}/${id}`)
    } catch (error) {
        console.log(error)
    }
}
export const editUser = async (id,user) => {
    try {
        return await axios.put(`${Url}/${id}`,user)
    } catch (error) {
        console.log(error)
    }
}
export const deleteUser = async (id) => {
    try {
        return await axios.delete(`${Url}/${id}`);
    } catch (error) {
        console.log(error)
    }
    
}