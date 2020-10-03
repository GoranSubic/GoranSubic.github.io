import Vue from 'vue/dist/vue.js'
import App from './App.vue'
import mymenu from './views/Menu.vue'

Vue.config.productionTip = false

new Vue({
    render: h => h(App),
}).$mount('#app');

Vue.component('my-menu', {
    name: 'mymenu',
    props: ['menu_array'],
    template: '<li v-bind:onclick="\'showSection(this)\'"><a>{{ menu_array.lst }}</a></li>'
});

new Vue({
    render: h => h(mymenu),
}).$mount('#menu-wrapper');
