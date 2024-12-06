<script setup>
import { ref, onMounted } from 'vue';
import { RouterLink } from 'vue-router';
import axios from 'axios';

const tvShows = ref([]);
const loading = ref(true);
const error = ref(null);

const apiKey = 'a60c8092d60c3a84b51bcf5ac7f13ae9';
const fetchTvShows = async () => {
  try {
    const response = await axios.get(
      `https://api.themoviedb.org/3/tv/popular?api_key=${apiKey}&language=en-US`
    );
    tvShows.value = response.data.results;
  } catch (err) {
    error.value = 'Failed to fetch TV shows.';
  } finally {
    loading.value = false;
  }
};

onMounted(fetchTvShows);
</script>

<template>
  <h3 class="display-6 text-warning">Popular TV Shows</h3>
  <div v-if="loading">Loading...</div>
  <div v-else-if="error">{{ error }}</div>
  <div v-else class="tv-list">
    <div v-for="tv in tvShows" :key="tv.id" class="tv-item">
      <img
        :src="'https://image.tmdb.org/t/p/w500' + tv.poster_path"
        :alt="tv.name"
        class="tv-poster"
      />
      <RouterLink :to="`/tv/${tv.id}`" class="tv-title">{{ tv.name }}</RouterLink>
    </div>
  </div>
</template>

<style scoped>
.tv-list {
  display: flex;
  flex-wrap: wrap;
  gap: 20px;
}

.tv-item {
  text-align: center;
  width: 200px;
}

.tv-poster {
  width: 100%;
  height: auto;
  border-radius: 8px;
  margin-bottom: 10px;
}

.tv-title {
  color: #154c79;
  text-decoration: none;
}

.tv-title:hover {
  text-decoration: underline;
}
</style>
