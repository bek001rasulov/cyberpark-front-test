import axios from "axios";

const baseURL = import.meta.env.VITE_API_BASE_URL;

const request = axios.create({
  baseURL,
  headers: {
    "Content-Type": "application/json",
  },
});

// request.interceptors.request.use(
//   async (config: any) => {
//     const session: any = getUser();
//     if (session?.session_id) {
//       config.headers = {
//         ...config.headers,
//         Authorization: `Bearer ${session.session_id}`,
//       };
//       return config;
//     }
//
//     return config;
//   },
//   (error: any) => Promise.reject(error)
// );

export { request };
