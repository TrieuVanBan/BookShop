import axios from "axios";
import { DEFAULT_HEADER } from "../constants/app.const";


const intance = axios.create({
    baseURL: import.meta.env.URL,
    headers: DEFAULT_HEADER
})

export default intance;