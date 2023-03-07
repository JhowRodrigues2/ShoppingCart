import axios from "axios";
// basta que você entre em crudcrud.com e substitua a url abaixo, com um endpoint seu...
export const api = axios.create({
  baseURL: `https://crudcrud.com/api/35f74fd74c3441788289458f4c62f795/`,
  timeout: 10000,
});
