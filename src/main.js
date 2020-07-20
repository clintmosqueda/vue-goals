import Vue from 'vue'
import App from './App.vue'
import ApolloClient from 'apollo-boost'
import VueApollo from 'vue-apollo'
import router from './router/route'
import store from './store'

const client = new ApolloClient({
  uri: "http://localhost:4000/"
});

const apolloProvider = new VueApollo({
  defaultClient: client
})

Vue.use(VueApollo)

Vue.config.productionTip = false


new Vue({
  router,
  store,
  apolloProvider,
  render: h => h(App)
}).$mount('#app')
