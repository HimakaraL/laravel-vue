import axios from "axios";

//register 
const axios1 = axios.create({
    baseURL: 'http://127.0.0.1:8000/api',
});

export default axios1;