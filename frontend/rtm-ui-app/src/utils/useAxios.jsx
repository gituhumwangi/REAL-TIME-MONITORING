import axios from 'axios';
import jwt_decode from "jwt-decode";
import dayjs from "dayjs";
import { useContext } from 'react';
import AuthContext from '../context/AuthContext';

const baseUrl = "http://127.0.0.1:8000/rtm/";

const useAxios = () => {
    const { authTokens, setUser, setAuthTokens } = useContext(AuthContext);
    
    // Here you can set up axios instance and interceptors if needed
    const axiosInstance = axios.create({
        baseURL: baseUrl,
        headers: {
            Authorization: `Bearer ${authTokens ? authTokens.access : ""}`
        }
    });

    // Optional: Add an interceptor to refresh tokens or handle errors
    // ...

    return axiosInstance;
};

export default useAxios;
