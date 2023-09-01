import './assets/main.css'
import 'bootstrap'
import 'bootstrap/dist/css/bootstrap.css'
import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import Navbar from './components/Navbar.vue';
import BlogDetails from './components/BlogDetails.vue';

const app = createApp(App)

app.use(router)
app.component('Navbar', Navbar);
app.component('BlogDetails', BlogDetails);
app.mount('#app')
