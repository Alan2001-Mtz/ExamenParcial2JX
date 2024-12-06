<script setup>
import { ref } from 'vue';
import { RouterLink } from 'vue-router';

const apiKey = 'a60c8092d60c3a84b51bcf5ac7f13ae9';
const baseUrl = `https://api.themoviedb.org/3/movie/now_playing?api_key=${apiKey}&language=en-US`;

const nowPlaying = ref([]);
const getNowPlayingMovies = async () => {
  try {
    const response = await fetch(baseUrl);
    const data = await response.json();
    nowPlaying.value = data.results.map((movie) => ({
      id: movie.id,
      title: movie.title,
      overview: movie.overview,
      poster_path: movie.poster_path,
    }));
  } catch (error) {
    console.error('Failed to fetch now playing movies:', error);
  }
};

getNowPlayingMovies();
</script>

<template>
  <h3 class="display-6 text-warning">List of Now Playing Movies</h3>
  <div class="movie-list">
    <div v-for="movie in nowPlaying" :key="movie.id" class="movie-item">
      <img
        :src="'https://image.tmdb.org/t/p/w500' + movie.poster_path"
        :alt="movie.title"
        class="movie-poster"
      />
      <RouterLink :to="`/movie/${movie.id}`" class="movie-title">{{ movie.title }}</RouterLink>
    </div>
  </div>
</template>

<style scoped>
.movie-list {
  display: flex;
  flex-wrap: wrap;
  gap: 20px;
}

.movie-item {
  text-align: center;
  width: 200px;
}

.movie-poster {
  width: 100%;
  height: auto;
  border-radius: 8px;
  margin-bottom: 10px;
}

.movie-title {
  color: #154c79;
  text-decoration: none;
}

.movie-title:hover {
  text-decoration: underline;
}
</style>
