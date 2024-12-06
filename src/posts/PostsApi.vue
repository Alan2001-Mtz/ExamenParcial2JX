<script setup>
import { ref } from 'vue';

// Simulación de publicaciones
const posts = ref([
  { id: 1, title: 'Vue 3 Tips and Tricks' },
  { id: 2, title: 'The Future of Web Development' },
  { id: 3, title: 'How to Build APIs' },
]);
</script>

<template>
  <div class="posts-container">
    <h1>Latest Posts</h1>
    <p class="intro">Stay updated with the latest in tech and development:</p>
    <div class="post-list">
      <div v-for="post in posts" :key="post.id" class="post-item">
        <h2>{{ post.title }}</h2>
        <p>{{ post.summary }}</p>
      </div>
    </div>
  </div>
</template>

<style scoped>
.posts-container {
  text-align: center;
  padding: 30px;
  background-color: #121212;
  color: #fff;
}

h1 {
  font-size: 2.5rem;
  margin-bottom: 20px;
  color: #ff8c00;
}

.intro {
  font-size: 1.2rem;
  margin-bottom: 30px;
}

.post-list {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  gap: 20px;
}

.post-item {
  background: #1a1a1a;
  padding: 20px;
  border-radius: 10px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.2);
  transition: transform 0.3s ease;
}

.post-item:hover {
  transform: scale(1.05);
  background-color: #154c79;
}

h2 {
  font-size: 1.5rem;
  color: #ff8c00;
}

p {
  color: #b0b0b0;
}
</style>
