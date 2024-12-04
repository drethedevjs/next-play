import { createApp } from 'vue';
import { createRouter, createWebHistory } from 'vue-router';
import App from './App.vue';
import './style.css';
import About from './views/About.vue';
import Books from './views/Books.vue';
import Branding from './views/Branding.vue';
import Contact from './views/Contact.vue';
import FAQ from './views/FAQ.vue';
import Home from './views/Home.vue';
import Schedule from './views/Schedule.vue';
import Services from './views/Services.vue';
import Subscribe from './views/Subscribe.vue';
import TheGamePlan from './views/TheGamePlan.vue';

const router = createRouter({
  history: createWebHistory(),
  routes: [
    { path: "/", component: Home },
    { path: "/about", component: About },
    { path: "/contact", component: Contact },
    { path: "/services", component: Services },
    { path: "/books", component: Books },
    { path: "/faq", component: FAQ },
    { path: "/subscribe", component: Subscribe },
    { path: "/game-plan", component: TheGamePlan },
    { path: "/branding", component: Branding },
    { path: "/schedule", component: Schedule }
  ],
  scrollBehavior(to, from) {
    if (to.path === from.path)
      return {};

    return { top: 0, behavior: "smooth" };
  }
});

router.afterEach((to, from) => {
  if(to.fullPath === "/schedule") {
    const script = document.createElement('script');
    script.src = 'https://assets.calendly.com/assets/external/widget.js';
    script.async = true;
    script.id = "calendy-script";
    document.body.appendChild(script);
  } else if (from.fullPath === "/schedule") {
    let calendyScript = document.getElementById("calendy-script");
    calendyScript?.remove();
  }
});


const app = createApp(App)
app.use(router);
app.mount('#app');