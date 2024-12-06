<script setup>
import { RouterView, RouterLink } from 'vue-router';
</script>

<template>
  <ul class="menu">
    <RouterLink to="/" class="link">Home</RouterLink>
    <RouterLink to="/phone" class="link">Phone</RouterLink>
    <RouterLink to="/movie" class="link">Movie</RouterLink>
    <RouterLink to="/post" class="link">Post</RouterLink>
    <RouterLink to="/tv" class="link">TV</RouterLink>
  </ul>
  <div class="container">
    <RouterView />
  </div>
</template>

<style scoped>
.menu {
  display: flex;
  gap: 10px;
  margin-bottom: 20px;
}

.link {
  text-decoration: none;
  color: #154c79;
  padding: 5px 10px;
  border: 1px solid #154c79;
  border-radius: 5px;
}

.link:hover {
  background-color: #154c79;
  color: white;
}
</style>
