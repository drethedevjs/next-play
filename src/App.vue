<script setup lang="ts">
import Footer from './components/TheFooter.vue';
import Header from './components/TheHeader.vue';
</script>

<template>
  <div class="flex flex-col min-h-screen">
    <Header />
    <main class="flex-grow">
      <router-view></router-view>
    </main>
    <Footer />
  </div>
</template>
