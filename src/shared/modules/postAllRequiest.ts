import { request } from "../api/requests";

export const postRequest = async <T>(url: string, data: T, config?: any) =>
  await request.post(url, data, config);
