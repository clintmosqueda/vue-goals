<template>
  <section class="archive">
    <h2 class="archive-heading">NEWS</h2>
    <div class="archive-content">
      <router-link 
        class="archive-link" 
        to="/"
        v-for="(article, index) in articles" 
        :key="index"
        >
        <Article 
          :image="article.image"
          :date="article.date"
          :title="article.title"
          />
      </router-link>
    </div>
    <div class="archive-button">
      <button>LOAD MORE</button>
    </div>
  </section>
</template>

<script>

import Article from '@/components/Article'

export default {
  name: 'Archive',
  props: ['articles'],
  components: {
    Article
  }
}
</script>

<style lang="sass">
.archive
  padding: 98px 0 150px

.archive-heading
  font-size: 50px
  font-weight: bold
  font-family: 'Montserrat', sans-serif
  margin-bottom: 65px
  letter-spacing: 0.09em

.archive-content
  display: flex
  flex-wrap: wrap
  margin: 0 -20px
  padding-bottom: 30px

.archive-link
  width: calc((100%/3) - 40px)
  margin: 0 20px 40px
  display: block
  color: #101010
  text-decoration: none

.archive-button
  margin: 0 auto
  width: 340px
</style>