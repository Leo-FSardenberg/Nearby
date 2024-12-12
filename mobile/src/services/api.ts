import axios from "axios"

export const api = axios.create({
  baseURL: "http://172.24.124.235:3333",
  timeout: 700,
})