import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import './assets/gobal.less'
import './plugin/axios'
import './filters'
import 'element-ui/lib/theme-chalk/index.css'//引入样式
import { Table, TableColumn } from 'element-ui';
Vue.use(Table)
Vue.use(TableColumn)

Vue.config.productionTip = false


new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
