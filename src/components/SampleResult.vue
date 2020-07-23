<template>
  <div>
    <span>sample result count: {{doubleCounter}}</span>
    <p>{{clickCounter}} inprogress</p>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
export default {
  name: 'SampleResult',
  computed: {
    ...mapGetters([
      'doubleCounter',
      'clickCounter'
    ])
  }
}
</script>