<script setup>
import { RouterLink } from 'vue-router';
</script>

<template>
  <div class="homepage-container">
    <h1>Welcome to NovaFlims</h1>
    <p class="intro">Explore the best movies, series, and more!</p>
    <div class="nav-links">
      <RouterLink to="/movies" class="btn btn-movies"> Movies</RouterLink>
      <RouterLink to="/tv" class="btn btn-tv"> TV Shows</RouterLink>
      <RouterLink to="/posts" class="btn btn-posts"> Post</RouterLink>
      <RouterLink to="/phone" class="btn btn-phone"> Phones</RouterLink>
    </div>
  </div>
</template>

<style scoped>
.homepage-container {
  text-align: center;
  padding: 50px;
  background: linear-gradient(to bottom, #1a1a1a, #121212);
  color: #ffffff;
}

h1 {
  font-size: 3rem;
  margin-bottom: 20px;
  color: #ff8c00;
}

.intro {
  font-size: 1.2rem;
  margin-bottom: 40px;
}

.nav-links {
  display: flex;
  justify-content: center;
  gap: 20px;
  flex-wrap: wrap;
}

.btn {
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 15px 30px;
  font-size: 1.2rem;
  border-radius: 8px;
  color: #ffffff;
  text-decoration: none;
  transition: transform 0.3s ease, background-color 0.3s;
}

.btn-movies {
  background-color: #e63946;
}

.btn-tv {
  background-color: #0077b6;
}

.btn-posts {
  background-color: #ff8c00;
}

.btn-phone {
  background-color: #43aa8b;
}

.btn:hover {
  transform: scale(1.1);
  background-color: #000;
}
</style>
