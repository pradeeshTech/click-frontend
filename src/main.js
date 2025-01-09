import './assets/main.css';
import 'primeicons/primeicons.css';
import { createApp } from 'vue';
import { createPinia } from 'pinia';

import App from './App.vue';
import router from './router';
import axios from 'axios';

// Set Axios base URL from environment variable
// axios.defaults.baseURL = import.meta.env.VITE_APP_BASE_URL;
axios.defaults.baseURL = import.meta.env.VITE_APP_BASE_URL || 'http://localhost:5000';

const app = createApp(App);

app.use(createPinia());
app.use(router);

// Logging the Axios base URL to verify
console.log('Axios Base URL:', axios.defaults.baseURL);

app.mount('#app');
