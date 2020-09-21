import Vue from 'vue'
import App from './App.vue'
import router from './Router/Index'
import Store from './Store/Store'
import '@fortawesome/fontawesome-free/css/all.css'
import '@fortawesome/fontawesome-free/js/all.js'

Vue.config.productionTip = false

new Vue({
    Store,
    router,
    render: h => h(App),
}).$mount('#app')