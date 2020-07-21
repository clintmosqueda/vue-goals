<template>
  <div class="single">
    <ApolloQuery 
      :query="query" 
      :variables="{id: id}"
      >
      <template slot-scope="{result: { loading, error, data}}">
        <div class="single-loading" v-if="loading">loading...</div>
        <div v-if="error">error...</div>
        <template v-if="data">
          <Breadcrumbs :title="data.post.title"/>
          <div class="wrapper">
            <div class="single-actions">
              <span class="single-action">Edit Post</span>
              <span class="single-action">Save Post</span>
              <span class="single-action">Cancel</span>
            </div>
            <div class="single-header">
              <time class="single-time">{{data.post.createdAt}}</time>
              <h1 class="single-title">{{data.post.title}}</h1>
              <div class="single-image" :style="`backgroundImage: url(${dummyImage})`"></div>
            </div>
            <div class="single-content">
              <p>{{data.post.content}}</p>
            </div>
            <div class="single-comment">
              <h2 class="single-comment-heading">COMMENT</h2>
              <template v-if="data.post.comments.length">
                <Comments :comments="data.post.comments"/>
              </template>
              <ApolloMutation
                :mutation="addCommentMutation"
                :variables="{postId: id, content: contents}"
                :update="handleComment"
              >
                <template slot-scope="{ mutate, loading, error }">
                  <form class="single-form" @submit.prevent="mutate">
                    <textarea class="single-form-textarea" placeholder="Write comment" v-model="contents"></textarea>
                    <Button class="single-button" type="submit" text="Submit"/>
                    <span v-if="loading">posting...</span>
                    <span v-if="error">something went wrong</span>
                  </form>
                </template>
              </ApolloMutation>
            </div>
          </div>
        </template>
      </template>
    </ApolloQuery>
  </div>
</template>

<script>
import { 
  GET_POST_BY_ID,
  ADD_COMMENT } from "@/queries.js";

import Comments from '@/components/Comments'
import Breadcrumbs from '@/components/Breadcrumbs'
import Button from '@/components/Button'
import dummyImage from '@/assets/mv.jpg'


export default {
  name: 'Single',
  components: {
    Breadcrumbs,
    Comments,
    Button
  },
  data() {
    return {
      dummyImage,
      query: GET_POST_BY_ID,
      addCommentMutation: ADD_COMMENT,
      id: null,
      contents: ''
    }
  },
  watch: {
    '$route'(to, from) {
      this.id = Number(to.params.id);
    }
  },
  beforeMount() {
    this.id = Number(this.$route.params.id)
  },
  methods: {
    handleComment() {
      this.contents = '';
    }
  },
}
</script>

<style lang="sass">
.single
  min-height: 100vh

.single-loading
  min-height: 200px
  display: flex
  justify-content: center
  align-items: center

.single-actions
  display: flex
  align-items: center
  justify-content: flex-end
  height: 150px

.single-action
  display: inline-block
  font-size: 20px
  font-weight: bold
  margin-left: 46px
  text-decoration: underline
  letter-spacing: 0.15em
  cursor: pointer

.single-header
  // padding: 120px 0 0
  margin-bottom: 50px

.single-time
  font-size: 20px
  font-family: 'Montserrat', sans-serif
  display: block
  margin-bottom: 33px
  letter-spacing: 0.2em

.single-title
  font-size: 40px
  font-weight: 600
  margin-bottom: 47px
  letter-spacing: 0.1em

.single-image
  height: 540px
  background-position: center
  background-repeat: no-repeat
  background-size: cover
  margin-bottom: 10px

.single-content
  padding-bottom: 82px
  
  p
    font-size: 18px
    line-height: 2.2
    margin-bottom: 43px

.single-comment 
  margin-bottom: 139px
  border-top: 1px solid #707070
  padding: 59px 0 10px

.single-comment-heading
  font-size: 50px
  color: #000
  font-weight: bold
  font-family: 'Montserrat', sans-serif
  margin-bottom: 40px
  letter-spacing: 0.1em

.single-form

.single-form-textarea
  display: block
  height: 100%
  width: 100%
  resize: none
  font-size: 19px
  border: 1px solid #000
  font-family: 'Montserrat', sans-serif
  font-style: italic
  padding: 20px
  height: 200px
  margin-bottom: 40px

  &:not(:placeholder-shown)
    & + .single-button
      pointer-events: auto
      background-color: rgba(#000, 1)

.single-button
  display: block
  width: 210px
  margin-left: auto
  pointer-events: none
  background-color: rgba(#000, 0.3)

</style>