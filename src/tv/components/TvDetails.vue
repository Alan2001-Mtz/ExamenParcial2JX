<script setup>
import { useRoute } from 'vue-router';
import { ref, onMounted } from 'vue';
import axios from 'axios';

const route = useRoute();
const tvShow = ref(null);
const loading = ref(true);
const error = ref(null);

const apiKey = 'a60c8092d60c3a84b51bcf5ac7f13ae9';
const fetchTvDetails = async () => {
  try {
    const response = await axios.get(
      `https://api.themoviedb.org/3/tv/${route.params.id}?api_key=${apiKey}&language=en-US`
    );
    tvShow.value = response.data;
  } catch (err) {
    error.value = 'Failed to load TV show details.';
  } finally {
    loading.value = false;
  }
};

onMounted(fetchTvDetails);
</script>

<template>
  <div>
    <div v-if="loading">Loading TV show details...</div>
    <div v-else-if="error">{{ error }}</div>
    <div v-else class="tv-details">
      <img
        v-if="tvShow.poster_path"
        :src="'https://image.tmdb.org/t/p/w500' + tvShow.poster_path"
        :alt="tvShow.name"
        class="tv-poster"
      />
      <div class="tv-info">
        <h1>{{ tvShow.name }}</h1>
        <p>{{ tvShow.overview }}</p>
        <p><strong>First Air Date:</strong> {{ tvShow.first_air_date }}</p>
        <p><strong>Rating:</strong> {{ tvShow.vote_average }} / 10</p>
        <p><strong>Genres:</strong> {{ tvShow.genres.map(genre => genre.name).join(', ') }}</p>
      </div>
      <RouterLink class="btn btn-success" to="/">Back to TV Shows</RouterLink>
    </div>
  </div>
</template>

<style scoped>
.tv-details {
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
}

.tv-poster {
  max-width: 300px;
  border-radius: 10px;
  margin-bottom: 20px;
}

.tv-info {
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
