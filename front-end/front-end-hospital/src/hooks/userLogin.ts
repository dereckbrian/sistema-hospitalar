import axios, { type AxiosPromise } from "axios"

const API_URL = 'http://localhost:8080'

export const userLogin = async (email: string, password: string) => {
    const response = await axios.post(`${API_URL}/auth/login`, {
        email: email,
        senha: password
    });
    return response.data;
}