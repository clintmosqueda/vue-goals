<template>
  <section class="form">
    <div class="form-block" v-if="isModalOpen">
      <div class="form-content">
        <div class="form-login" v-if="isLoginOpen">
          <h2 class="form-title">REGISTER</h2>
          <div class="form-holder">
            <label class="form-label" for="">Email</label>
            <input class="form-input" type="email">
          </div>
          <div class="form-holder">
            <label class="form-label" for="">Password</label>
            <input class="form-input" type="password">
          </div>
          <Button text="LOGIN"/>
          <p class="form-copy">No account yet? <span @click="handleRegister">REGISTER HERE</span></p>
        </div>
        <div class="form-register" v-else>
          <h2 class="form-title">REGISTER</h2>
          <div class="form-holder">
            <label class="form-label" for="">Email</label>
            <input class="form-input" type="email">
          </div>
          <div class="form-holder">
            <label class="form-label" for="">Password</label>
            <input class="form-input" type="password">
          </div>
          <div class="form-holder">
            <label class="form-label" for="">Confirm Password</label>
            <input class="form-input" type="password">
          </div>
          <Button text="REGISTER"/>
          <p class="form-copy">Already have an account? <span @click="handleRegister">LOGIN HERE</span></p>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import Button from '@/components/Button'
export default {
  name: 'Form',
  props: ['isModalOpen'],
  components: {
    Button
  },
  data() {
    return {
      isLoginOpen: true,
    }
  },
  methods: {
    handleRegister() {
      this.isLoginOpen = !this.isLoginOpen
      
    }
  },
}
</script>

<style lang="sass">
.form
  position: relative

.form-block
  position: fixed
  width: 100%
  top: 0
  left: 0
  height: 100vh
  background-color: #fff
  display: flex
  align-items: center
  justify-content: center
  z-index: 5

.form-content
  width: 460px

.form-login

.form-holder
  margin-bottom: 20px

.form-title
  font-weight: bold
  font-size: 30px
  font-family: 'Montserrat', sans-serif
  margin-bottom: 50px
  letter-spacing: 0.09em

.form-label
  display: block
  font-size: 18px
  font-family: 'Montserrat', sans-serif
  margin-bottom: 5px
  letter-spacing: 0.11em

.form-input
  border: 1px solid #101010
  height: 60px
  background-color: #fff
  display: block
  width: 100%

.form-copy
  font-size: 18px
  font-family: 'Montserrat', sans-serif
  letter-spacing: 0.11em
  text-align: center
  margin-top: 38px

  span
    font-weight: bold
    cursor: pointer
  
</style>