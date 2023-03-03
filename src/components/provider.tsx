import axios from "axios";
// basta que você entre em crudcrud.com e substitua a url abaixo, com um endpoint seu...

export const api = axios.create({
  baseURL: "https://crudcrud.com/api/8db6196fcb5a4481a0adcadc605e1c2d/",
  timeout: 10000,
});
