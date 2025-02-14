import PrimeVue from 'primevue/config';
import Dialog from 'primevue/dialog';
import { createApp } from 'vue';
import App from './app.vue';
import router from "./router";

import Lara from '@primevue/themes/lara';
import 'primeicons/primeicons.css';
import store from './store/index';

const app = createApp(App);

app.use(PrimeVue, {
    theme: {
        preset: Lara
    }
});
app.use(router);
app.use(store);

// eslint-disable-next-line vue/no-reserved-component-names
app.component('Dialog', Dialog);

app.mount('#app')

