import axios from "axios";
// import { DEFAULT_HEADER } from "../constants/app.const";

// const intance = axios.create({
//     baseURL: 'http://localhost:3000/',
//     headers: DEFAULT_HEADER
// })

const instance = axios.create({
    baseURL: 'http://localhost:3000',
    // timeout: 1000,
    // headers: {'X-Custom-Header': 'foobar'}
  });

export default instance;