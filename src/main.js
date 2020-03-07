import Vue from 'vue'
import App from './App.vue'
import store from './store'
import Axios from 'axios'

/* buefy */
import {
  Button,
  Checkbox,
  Datepicker,
  Field,
  Input,
  Progress,
  Radio,
  Select
} from 'buefy'
import 'buefy/dist/buefy.css'
Vue.use(Button)
Vue.use(Checkbox)
Vue.use(Datepicker)
Vue.use(Field)
Vue.use(Input)
Vue.use(Progress)
Vue.use(Radio)
Vue.use(Select)

Vue.prototype.$axios = Axios
Vue.config.productionTip = false

new Vue({
  store,
  render: h => h(App)
}).$mount('#app')
