import { createApp } from 'vue';
import { createRouter, createWebHistory } from 'vue-router';
import App from './App.vue';
import './style.css';
import About from './views/About.vue';
import Books from './views/Books.vue';
import Contact from './views/Contact.vue';
import FAQ from './views/FAQ.vue';
import Home from './views/Home.vue';
import Services from './views/Services.vue';

const router = createRouter({
  history: createWebHistory(),
  routes: [
    { path: "/", component: Home },
    { path: "/about", component: About },
    { path: "/contact", component: Contact },
    { path: "/services", component: Services },
    { path: "/books", component: Books },
    { path: "/faq", component: FAQ }
  ],
  scrollBehavior() {
    return { top: 0, behavior: "smooth" }
  }
});

const app = createApp(App)
app.use(router);
app.mount('#app');