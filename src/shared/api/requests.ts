import axios from "axios";

const baseURL = import.meta.env.VITE_API_BASE_URL;

const request = axios.create({
    baseURL,
    headers: {
        "Content-Type": "application/json",
    },
});

request.interceptors.request.use(
    async (config: any) => {
        const token: any = localStorage.getItem("token");
        if (token) {
            config.headers = {
                ...config.headers,
                Authorization: `Bearer ${token}`,
            };
            return config;
        }

        return config;
    },
    (error: any) => Promise.reject(error)
);

export {request};
