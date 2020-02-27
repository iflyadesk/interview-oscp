import Vue from 'vue'
import App from './App.vue'
import store from './store'
import Axios from 'axios'

/* buefy */
import { Progress, Field, Radio, Input, Datepicker, Button } from 'buefy'
import 'buefy/dist/buefy.css'
Vue.use(Field)
Vue.use(Radio)
Vue.use(Progress)
Vue.use(Input)
Vue.use(Datepicker)
Vue.use(Button)

Vue.prototype.$axios = Axios
Vue.config.productionTip = false

new Vue({
  store,
  render: h => h(App)
}).$mount('#app')
