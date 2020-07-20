<template>
  <div id="app" :style="[showLogin ? {'overflow' : 'hidden', 'height' : '100vh'} : '']">
    <Header :showLogin="showLogin" @showLogin="handleLogin"/>
    <Form :isModalOpen="showLogin"/>
    <router-view/>
    <Footer/>
  </div>
</template>

<script>
import Header from '@/components/Header'
import Form from '@/components/Form'
import Footer from '@/components/Footer'

export default {
  components: {
    Header,
    Form,
    Footer
  },
  data() {
    return {
      showLogin: false,
    }
  },
  methods: {
    handleLogin() {
      this.showLogin = !this.showLogin;
    }
  },
}
</script>

<style lang="sass">

@import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@400;700&display=swap')

*
  padding: 0
  margin: 0
  box-sizing: border-box

body 
  margin: 0
  font-family: "游ゴシック", "Yu Gothic", "游ゴシック体", YuGothic, sans-serif
  -webkit-font-smoothing: antialiased
  -moz-osx-font-smoothing: grayscale

.wrapper
  margin: 0 auto
  width: 1100px

button
  cursor: pointer
  border: none
  appearance: none

  &:focus,
  &:active
    outline: none

</style>
