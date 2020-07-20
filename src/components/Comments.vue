<template>
  <section class="comments">
    <h2 class="comments-heading">COMMENT</h2>
    <article class="comments-content"> 
      <p class="comments-text">ここにはテキストが入ります。ここにはテキストが入りますここにはテキストが入りますここにはテキストが入りますここにはテキストが入ります。ここにはテキストが入ります。ここにはテキストが入りますここにはテキストが入りますここにはテキストが入りますここにはテキストが入ります。</p>
      <time class="comments-date">3 months ago</time>
    </article>
    <article class="comments-content"> 
      <p class="comments-text">ここにはテキストが入ります。ここにはテキストが入りますここにはテキストが入りますここにはテキストが入りますここにはテキストが入ります。ここにはテキストが入ります。ここにはテキストが入りますここにはテキストが入りますここにはテキストが入りますここにはテキストが入ります。</p>
      <time class="comments-date">3 months ago</time>
    </article>
    <div class="comments-box">
      <textarea class="comments-textarea" placeholder="Write comment"></textarea>
      <div class="comments-button"><Button text="Submit"/></div>
    </div>
  </section>
</template>

<script>
import Button from '@/components/Button'
export default {
  name: 'Comments',
  components: {
    Button
  },
}
</script>


<style lang="sass">
.comments
  border-top: 1px solid #707070
  padding: 59px 0 10px

.comments-heading
  font-size: 50px
  color: #000
  font-weight: bold
  font-family: 'Montserrat', sans-serif
  margin-bottom: 40px
  letter-spacing: 0.1em

.comments-content
  background-color: #F5F5F5
  padding: 48px 40px
  margin-bottom: 50px 

.comments-text
  font-size: 18px
  line-height: 2.2
  margin-bottom: 28px

.comments-date
  font-size: 16px
  font-weight: bold
  font-family: 'Montserrat', sans-serif
  letter-spacing: 0.1em

.comments-box
  margin-bottom: 139px

.comments-textarea
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

.comments-button
  display: block
  width: 210px
  margin-left: auto
</style>