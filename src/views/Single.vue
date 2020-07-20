<template>
  <div class="single">
    <div class="wrapper">
      <div class="single-actions">
        <span class="single-action">Edit Post</span>
        <span class="single-action">Save Post</span>
        <span class="single-action">Cancel</span>
      </div>
      <div class="single-header">
        <time class="single-time">2019.06.19</time>
        <h1 class="single-title">サンプルテキストサンプル ルテキストサンプルテキストサンプルテキストサンプル ルテキスト {{$route.params.id}}</h1>
        <div class="single-image" :style="`backgroundImage: url(${dummyImage})`"></div>
      </div>
      <div class="single-content">
        <p>ここにはテキストが入ります。ここにはテキストが入りますここにはテキストが入りますここにはテキストが入りますここにはテキストが入ります。ここにはテキストが入ります。ここにはテキストが入りますここにはテキストが入りますここにはテキストが入りますここにはテキストが入ります。ここにはテキストが入ります。ここにはテキストが入りますここにはテキストが入りますここにはテキストが入りますここにはテキストが入ります。</p>
        <p>ここにはテキストが入ります。ここにはテキストが入りますここにはテキストが入りますここにはテキストが入りますここにはテキストが入ります。ここにはテキストが入ります。ここにはテキストが入りますここにはテキストが入りますここにはテキストが入りますここにはテキストが入ります。ここにはテキストが入ります。ここにはテキストが入りますここにはテキストが入りますここにはテキストが入りますここにはテキストが入ります。</p>
      </div>
      <div class="single-comments">
        <Comments/>
      </div>
    </div>
  </div>
</template>

<script>
import Comments from '@/components/Comments'
import dummyImage from '@/assets/mv.jpg'

export default {
  name: 'Single',
  components: {
    Comments
  },
  data() {
    return {
      dummyImage
    }
  },
}
</script>

<style lang="sass">
.single

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

</style>