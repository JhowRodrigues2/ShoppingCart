import axios from "axios";

export const api = axios.create({
  baseURL: "https://crudcrud.com/api/5835440883a64b029d7d52082a3bcc48/",
  timeout: 1000,
});
