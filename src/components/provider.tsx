import axios from "axios";

export const api = axios.create({
  baseURL: "https://crudcrud.com/api/2ebc4e2f9a6546149bc6d176c2096ad0/",
  timeout: 10000,
});
