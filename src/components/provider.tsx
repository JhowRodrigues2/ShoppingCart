import axios from "axios";
// basta que você entre em crudcrud.com e substitua a url abaixo, com um endpoint seu...
export const api = axios.create({
  baseURL: `https://crudcrud.com/api/840628f02d184b1d845e14b695c3f2d6/`,
  timeout: 10000,
});
