<template>
  <section class="archive">
    <h2 class="archive-heading">NEWS</h2>
    <ApolloQuery :query="query">
      <template slot-scope="{result: { loading, error, data } }">
        <div v-if="loading">Loading...</div>
        <div v-if="error">crap</div>
        <div class="archive-content" v-if="data">
          <router-link 
            class="archive-link" 
            v-for="(article) in data.posts" 
            :to="`/news/${article.id}`"
            :key="article.id"
            >
            <Article 
              :image="article.image"
              :date="article.createdAt"
              :title="article.title"
              />
          </router-link>
        </div>
        <div v-else>No Posts</div>
      </template>
    </ApolloQuery>
    <div class="archive-button">
      <Button text="LOAD MORE"/>
    </div>
  </section>
</template>

<script>

import Article from '@/components/Article'
import Button from '@/components/Button' 
import { GET_POSTS } from "@/queries.js";

export default {
  name: 'Archive',
  props: ['articles'],
  components: {
    Article,
    Button,
  },
  data() {
    return {
      query: GET_POSTS
    }
  },
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