import PrimeVue from 'primevue/config';
import Dialog from 'primevue/dialog';
import { createApp } from 'vue';
import App from './app.vue';
import router from "./router";

import 'primevue/resources/themes/saga-blue/theme.css';
import 'primevue/resources/primevue.min.css';
import 'primeicons/primeicons.css';

const app = createApp(App);

app.use(PrimeVue);
app.use(router);

app.component('Dialog', Dialog);

app.mount('app')

