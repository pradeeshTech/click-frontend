import axios from 'axios';
console.log("Base URL:", axios.defaults.baseURL);

axios.defaults.baseURL = `https://api.think.ind.in/api/`;