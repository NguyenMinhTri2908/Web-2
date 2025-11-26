import { createApp } from 'vue';
import App from './App.vue';
import router from './router'; // Import router đã cấu hình
import 'fomantic-ui-css/semantic.min.css'; // Import CSS giao diện

const app = createApp(App);
app.use(router); // Sử dụng router
app.mount('#app');