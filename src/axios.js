import axios from 'axios';

// axios.defaults.baseURL =`${window.location.origin`http://127.0.0.1:5000/`}`;

axios.defaults.baseURL = process.env.VUE_APP_BASE_URL;