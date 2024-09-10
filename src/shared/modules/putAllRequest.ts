import { request } from "../api/requests";

export const putRequest = async <T>(url: string, data: T) =>
  await request.put(url, data);
