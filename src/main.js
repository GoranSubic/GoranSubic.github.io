import Vue from 'vue/dist/vue.js'
import App from './App.vue'
import router from './router'
import mymenu from './views/Menu.vue'
import VueAnalytics from 'vue-analytics'

Vue.config.productionTip = false

// Configuration VueAnalytics
Vue.use(VueAnalytics, {
    id: 'UA-180865322-1',
    router
});

new Vue({
    router,
    render: h => h(App)
}).$mount('#app');

Vue.component('my-menu', {
    name: 'mymenu',
    props: ['menu_array'],
    template: '<li v-bind:onclick="\'showSection(this)\'"><a>{{ menu_array.lst }}</a></li>'
});

new Vue({
    render: h => h(mymenu),
}).$mount('#menu-wrapper');
