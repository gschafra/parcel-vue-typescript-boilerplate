import Vue from 'vue'
import App from './app.vue'
import router from './router'
import store from './store'
import Vuetify from 'vuetify'
import 'vuetify/dist/vuetify.min.css'

Vue.use(Vuetify)

const opts = {}

export default new Vuetify(opts)

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const app = new Vue({
	router,
	store,
	render: h => h(App),
	el: 'app'
})
