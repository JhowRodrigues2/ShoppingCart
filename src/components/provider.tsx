import axios from "axios";
// basta que você entre em crudcrud.com e substitua a url abaixo, com um endpoint seu...
export const api = axios.create({
  baseURL: `https://crudcrud.com/api/7344bd1a42f24a00b4dacc80ffd7903c/`,
  timeout: 10000,
});
