import Vue from 'vue/dist/vue.js'
import App from './App.vue'
import SideNav from './views/SideNav.vue'
import Menu from './views/Menu.vue'

Vue.config.productionTip = false

new Vue({
    render: h => h(App),
}).$mount('#app');

Vue.component('items-list', {
    props: ['items'],
    template: '<li> {{ items.lst }} </li>'
});

new Vue({
    render: h => h(SideNav),
}).$mount('#mysidenav');

new Vue({
    render: h => h(Menu),
}).$mount('#menu-wrapper');
