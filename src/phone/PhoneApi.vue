<script setup>
import { ref } from 'vue';

// Simulación de datos
const phoneBrands = ref([
  { id: 1, name: 'Apple' },
  { id: 2, name: 'Samsung' },
  { id: 3, name: 'Google' },
]);
</script>

<template>
  <div class="phone-container">
    <h1>Phone Brands</h1>
    <p class="intro">Explore the world’s most popular phone brands:</p>
    <ul class="brand-list">
      <li v-for="brand in phoneBrands" :key="brand.id" class="brand-item">
        <h2>{{ brand.name }}</h2>
        <p>{{ brand.description }}</p>
      </li>
    </ul>
  </div>
</template>

<style scoped>
.phone-container {
  text-align: center;
  padding: 30px;
  background-color: #f9f9f9;
  color: #154c79;
}

h1 {
  font-size: 2.5rem;
  margin-bottom: 20px;
}

.intro {
  font-size: 1.2rem;
  margin-bottom: 30px;
}

.brand-list {
  list-style: none;
  padding: 0;
}

.brand-item {
  background: #154c79;
  color: #fff;
  margin: 15px auto;
  padding: 20px;
  border-radius: 10px;
  max-width: 600px;
  transition: transform 0.3s ease;
}

.brand-item:hover {
  transform: scale(1.05);
  background-color: #0077b6;
}
</style>
