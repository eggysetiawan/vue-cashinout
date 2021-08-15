import { createApp } from 'vue';
import App from './App.vue';
import router from './router';
import store from './store';
import axios from 'axios';
import './index.css';

axios.interceptors.request.use((config) => {
	config.baseURL = 'http://backend.cashinout.test';
	config.withCredentials = true;
	return config;
});

createApp(App)
	.use(store)
	.use(router)
	.mount('#app');
