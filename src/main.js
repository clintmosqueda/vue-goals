import Vue from 'vue'
import App from './App.vue'
import ApolloClient from 'apollo-boost'
import VueApollo from 'vue-apollo'
import router from './router/route'
import store from './store/store'

Vue.use(VueApollo)
Vue.config.productionTip = false

// let token = localStorage.getItem('token');
// Object.defineProperty(Vue.prototype, '$token', {
//   get() { return token },
//   set(value) { token = value },
// })

const apolloclient = new ApolloClient({
  uri: "http://localhost:4000/",
  // request: (operation) => {
  //   operation.setContext({
  //     headers: {
  //       Authorization: token ? token : ''
  //     }
  //   })
  // },
});

const apolloProvider = new VueApollo({
  defaultClient: apolloclient
})

new Vue({
  router,
  store,
  apolloProvider,
  render: h => h(App)
}).$mount('#app')
