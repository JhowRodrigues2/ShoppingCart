import axios from "axios";
// basta que você entre em crudcrud.com e substitua a url abaixo, com um endpoint seu...
export const api = axios.create({
  baseURL: `https://crudcrud.com/api/451e3018c722494c8810db3960a3cbba/`,
  timeout: 10000,
});
