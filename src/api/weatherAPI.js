import * as axios from "axios";

const instance = axios.create({
    withCredentials: true,
    baseURL: 'https://social-network.samuraijs.com/api/1.0/',
    headers: {
        "API-KEY": "ce8e2bf7-d2cc-4609-b9e3-19efb9b388d7"
    }
});