<template>
  <div class="home">
    <Hero/>
    <div class="wrapper">
      <Archive :articles="articles"/>
    </div>
  </div>
</template>

<script>

import Hero from '@/components/Hero'
import Archive from '@/components/Archive'

export default {
  name: 'Home',
  components: {
    Hero,
    Archive
  },
  data() {
    return {
      articles: [
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
        },
        {
          id: '4',
          image: 'image4',
          title: 'サンプルテキストサンプル 4',
          date: '2019.06.19'
        },
        {
          id: '5',
          image: 'image5',
          title: 'サンプルテキストサンプル 5',
          date: '2019.07.19' 
        },
        {
          id: '6',
          image: 'image6',
          title: 'サンプルテキストサンプル 6',
          date: '2019.08.19'
        },
      ],
    }
  },
}
</script>