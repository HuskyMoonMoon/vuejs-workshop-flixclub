<template>
  <div class="hello">
    <input v-model="query" @keyup.Enter="search">
    <button @click="search">Search</button>
    <hr>
    <h1>Search result for '{{ query}}'</h1>
    <div v-if="movie.Poster !== 'N/A'" v-for="movie in movies" :key="movie.imdbID" class="poster">
      <img :src="movie.Poster" :alt="movie.Title">
    </div>
  </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'

export default {
  name: 'HelloWorld',
  data () {
    return {
      query: 'avengers'
    }
  },
  computed: {
    ...mapGetters(['movies'])
  },
  async created () {
    this.fetchMovies(this.query)
  },
  methods: {
    ...mapActions(['fetchMovies']),
    search () {
      this.fetchMovies(this.query)
    }
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
</style>
