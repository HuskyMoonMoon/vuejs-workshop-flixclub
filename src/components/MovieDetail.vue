<template>
  <div>
      <h1>{{ $route.params.id }} : {{ movieDetail.Title }}</h1>
      <img :src="movieDetail.Poster" :alt="movieDetail.Title">
      <div v-for="(value, key) in movieDetail" :key= "key">
        {{ key }}: {{ value }}
      </div>
  </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'

export default {
  name: 'MovieDetail',
  computed: {
    ...mapGetters(['movieDetail'])
  },
  async created () {
    this.fetchMovieDetail(this.$route.params.id)
  },
  methods: {
    ...mapActions(['fetchMovieDetail'])
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.poster {
  display: inline-block;
}
img {
  width: 240px;
}
#detail {
  font-size: 20
}
</style>
