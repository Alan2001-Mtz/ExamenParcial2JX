<script setup>
import { useRoute } from 'vue-router';
import { ref, onMounted } from 'vue';
import axios from 'axios';

const route = useRoute();
const movie = ref(null);
const loading = ref(true);
const error = ref(null);

const apiKey = 'a60c8092d60c3a84b51bcf5ac7f13ae9';
const fetchMovieDetails = async () => {
  try {
    const response = await axios.get(
      `https://api.themoviedb.org/3/movie/${route.params.id}?api_key=${apiKey}&language=en-US`
    );
    movie.value = response.data;
  } catch (err) {
    error.value = 'Failed to fetch movie details.';
  } finally {
    loading.value = false;
  }
};

onMounted(fetchMovieDetails);
</script>

<template>
  <div>
    <div v-if="loading">Loading movie details...</div>
    <div v-else-if="error">{{ error }}</div>
    <div v-else class="movie-details">
      <img
        v-if="movie.poster_path"
        :src="'https://image.tmdb.org/t/p/w500' + movie.poster_path"
        :alt="movie.title"
        class="movie-poster"
      />
      <div class="movie-info">
        <h1>{{ movie.title }}</h1>
        <p>{{ movie.overview }}</p>
        <p><strong>Release Date:</strong> {{ movie.release_date }}</p>
        <p><strong>Rating:</strong> {{ movie.vote_average }}</p>
      </div>
      <RouterLink class="btn btn-success" to="/">Back to Movies</RouterLink>
    </div>
  </div>
</template>

<style scoped>
.movie-details {
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
}

.movie-poster {
  max-width: 300px;
  border-radius: 10px;
  margin-bottom: 20px;
}

.movie-info {
  color: #154c79;
}

h1 {
  color: #154c79;
  margin-bottom: 10px;
}

.btn {
  margin-top: 20px;
  padding: 10px 15px;
  background-color: #28a745;
  color: white;
  text-decoration: none;
  border-radius: 5px;
  font-weight: bold;
}

.btn:hover {
  background-color: #218838;
}
</style>
