import { getFetch, postFetch } from "./api-fns";

const baseUrl = import.meta.env.DEV
  ? "/apis"
  : "https://sharepe.bitbns.com/v1/apis";

export const loginUser = (body) => postFetch(`${baseUrl}/users/login`, body);

export const checkSession = () => getFetch(`${baseUrl}/users/check-session`);
