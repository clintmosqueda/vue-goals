<template>
  <div class="header">
    <div class="wrapper">
      <header class="header-block">
        <router-link to="/"><img src="../assets/logo.png" alt="logo"></router-link>
        <button @click="$emit('showLogin')" class="header-button">{{showLogin ? 'CLOSE' : 'LOGIN'}}</button>
      </header>
    </div>
  </div>
</template>

<script>

export default {
  name: 'Header',
  props: ['showLogin'],
}

</script>

<style lang="sass">
.header
  position: relative
  z-index: 10

.header-block
  background-color: #fff
  height: 100px
  display: flex
  justify-content: space-between
  align-items: center

.header-button
  font-family: 'Montserrat', sans-serif
  font-size: 18px
  font-weight: bold
  letter-spacing: 0.09em
  cursor: pointer
  background: transparent
  border: none
</style>
