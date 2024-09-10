import { request } from "../api/requests";

export const deleteRequest = async (url: string) =>
  await request.delete<any>(url);
