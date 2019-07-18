import Vue from 'vue'
import App from './app.vue'
import router from './router'
import store from './store'
import SuiVue from 'semantic-ui-vue'
import 'semantic-ui-css/semantic.min.css'

const app = new Vue({
  router,
  store,
  render: h => h(App),
  el: 'app',
  components: {
    App
  }
})
