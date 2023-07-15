import axios from "axios";

//https://viacep.com.br/ws/  

const API = axios.create({
    baseURL: "https://viacep.com.br/ws/"
});

export default API;