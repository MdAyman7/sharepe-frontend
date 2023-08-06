import { getFetch, postFetch } from "./api-fns";

const baseUrl = import.meta.env.DEV
  ? "/v1/apis"
  : "https://sharepe.bitbns.com/v1/apis";

export const loginUser = (body) => postFetch(`${baseUrl}/users/login`, body);
export const signupUser = (body) => postFetch(`${baseUrl}/users/signup`, body);
export const createNewContract = (body) =>
  postFetch(`${baseUrl}/chitfunds/create`, body);

export const checkSession = () => getFetch(`${baseUrl}/users/check-session`);
