import axios from "axios";
// basta que você entre em crudcrud.com e substitua a url abaixo, com um endpoint seu...

export const api = axios.create({
  baseURL: "https://crudcrud.com/api/b5060bf76dda4ab89aca3ef1e5b725e3/",
  timeout: 10000,
});
