<template>
  <div class="hero">
    <div class="hero-block" 
      v-for="(bannerArticle, index) in bannerArticles" 
      :key="index" 
      :class="slide == index+1 ? 'is-active' : ''">
      <section class="hero-image">
        <div class="wrapper">
          <div class="hero-content">
            <h2 class="hero-heading">{{bannerArticle.title}}</h2>
            <time class="hero-time" v-bind:dateTime="bannerArticle.date">{{bannerArticle.date}}</time>
          </div>
        </div>
      </section>
    </div>
    <div class="hero-dots">
      <span class="hero-dot" 
        v-for="(n, index) in totalSlides" 
        :key="index"
        :class="slide == index+1 ? 'is-active' : ''"></span>
    </div>
    <div class="hero-arrows">
      <button class="hero-arrow hero-prev" @click="handlePrev">&lt;</button>
      <button class="hero-arrow hero-next" @click="handleNext">&gt;</button>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Hero',
  data() {
    return {
      slide: 1,
      totalSlides: null,
      bannerArticles: [
        {
          id: '1',
          image: 'image1',
          title: 'サンプルテキストサンプル1',
          date: '2019.06.19'
        },
        {
          id: '2',
          image: 'image2',
          title: 'サンプルテキストサンプル 2',
          date: '2019.07.19' 
        },
        {
          id: '3',
          image: 'image3',
          title: 'サンプルテキストサンプル 3',
          date: '2019.08.19'
        }
      ],
    }
  },
  beforeMount() {
    this.totalSlides = this.bannerArticles.length
  },
  methods: {
    handlePrev() {
      if(this.slide <= 1) {
        this.slide == this.totalSlides;
        console.log(`${this.slide} prev`)
      } else {
        this.slide -= 1
      }
      console.log(`${this.slide} prev`)
    },
    handleNext() {
      if (this.slide >= this.totalSlides ) {
        this.slide == 1
        
        console.log('here')
      } else {
        this.slide ++
      }
      console.log(`${this.slide} next`)
    }
  },
}
</script>

<style lang="sass">
.hero
  position: relative
  height: 666px

.hero-block
  position: absolute
  top: 0
  left: 0
  width: 100%
  opacity: 0
  transition: opacity 500ms ease-in-out

  &.is-active
    opacity: 1

.hero-image
  background-position: center
  background-repeat: no-repeat
  background-size: cover

.hero-content
  height: 666px
  display: flex
  flex-direction: column
  justify-content: center
  align-items: flex-end
  flex-shrink: 0

.hero-heading
  font-size: 60px
  color: #fff
  background-color: #000
  width: 560px

.hero-time
  font-size: 28px
  font-family: 'Montserrat', sans-serif
  letter-spacing: 0.2em
  margin-top: 24px

.hero-dots
  position: absolute
  bottom: 51px
  left: 0
  width: 100%
  display: flex
  justify-content: center
  align-items: center

.hero-dot
  display: inline-block
  background-color: #707070
  width: 15px
  height: 15px
  border-radius: 50%
  margin: 0 5px

  &.is-active
    background-color: #000

.hero-arrows
  position: absolute
  left: 0
  top: 50%
  transform: translateY(-50%)
  width: 100%
  display: flex
  justify-content: space-between
  z-index: 1
  padding: 0 30px

.hero-arrow
  appearance: none
  border: none
  background: transparent
  font-size: 30px
  font-family: 'Montserrat', sans-serif
  font-weight: bold
  cursor: pointer

  &:focus,
  &:active
    outline: none

</style>