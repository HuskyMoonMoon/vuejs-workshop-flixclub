import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'

Vue.use(Vuex)

export const store = new Vuex.Store({
  state: {
    movies: [],
    movieDetail: {}
  },
  mutations: {
    setMovies: (state, movies) => { state.movies = movies },
    setMovieDetail: (state, movie) => { state.movieDetail = movie }
  },
  actions: {
    setMovies: (state, movies) => {
      state.commit('setMovies', movies)
    },
    setMovieDetail: (state, movie) => {
      state.commit('setMovieDetail', movie)
    },
    fetchMovies: async (state, query) => {
      state.dispatch('setMovies', [])
      let response = await axios.get(`https://www.omdbapi.com/?s=${query}&apikey=409a3997`)
      state.dispatch('setMovies', response.data.Search)
    },
    fetchMovieDetail: async (state, movieId) => {
      state.dispatch('setMovieDetail', {})
      let response = await axios.get(`https://www.omdbapi.com/?i=${movieId}&apikey=409a3997`)
      state.dispatch('setMovieDetail', response.data)
    }
  },
  getters: {
    movies: (state) => state.movies,
    movieDetail: (state) => state.movieDetail
  }
})

export default store
