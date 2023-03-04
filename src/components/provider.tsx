import axios from "axios";
// basta que você entre em crudcrud.com e substitua a url abaixo, com um endpoint seu...
export const api = axios.create({
  baseURL: `https://crudcrud.com/api/f75054c1da164392ae27d9bccf8161b2/`,
  timeout: 10000,
});
