import { request } from "../api/requests";

export const getRequest = async (url: string, config?: any) =>
  await request<any>(url, config);
