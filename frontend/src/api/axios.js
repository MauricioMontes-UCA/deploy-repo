import axios from "axios";
import dotenv from "dotenv";

const baseURL = import.meta.env.VITE_BASE_URI;

const instance = axios.create({
    baseURL: baseURL,
    withCredentials: true
})

export default instance;