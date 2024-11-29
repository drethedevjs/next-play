<script setup lang="ts">
import { RouterLink } from 'vue-router';
import CallToAction from '../components/CallToAction.vue';
import Hero from '../components/Hero.vue';
import Specialties from '../components/Specialties.vue';
</script>

<template>
  <Hero />
  <Specialties />
  <CallToAction class="bg-dark">
    <template #header>
      <h1 class="pane-header">Ready to Start?</h1>
    </template>
    <template #body>
      <p class="text-white">Take the first step toward transforming your athletic journey. 
        Whether you're an athlete redefining your purpose, a parent seeking guidance, 
        or a coach shaping tomorrow's leaders, we're here to help.
      </p>
    </template>
    <template #action>
      <button class="btn ready-btn disabled:cursor-not-allowed" disabled>Book Your Free Discovery Call</button>
    </template>
  </CallToAction>

  <CallToAction>
    <template #header>
      <h1 class="pane-header">Got Questions</h1>
    </template>
    <template #body>
      <p class="text-dark">
        Check out our <span class="text-secondary">FAQ</span> page or reach out via our <span class="text-secondary">Contact Us</span> page for more details.
      </p>
    </template>
    <template #action>
      <router-link to="/faq">
        <button class="btn action-btn mr-3">FAQ</button>
      </router-link>
      <router-link to="/contact">
        <button class="btn action-btn">Contact Us</button>
      </router-link>
    </template>
  </CallToAction>
</template>

<style scoped>
  p {
    @apply text-3xl mb-10
  }

  .btn {
    @apply transition-colors sm:py-5 sm:px-10 text-xl py-5 px-7 sm:text-2xl mb-3 rounded font-bold hover:bg-transparent;
  }

  .ready-btn {
    @apply bg-secondary text-white border-2 border-secondary;
  }

  .action-btn {
    @apply bg-secondary text-white hover:text-dark border-2 border-secondary;
  }
</style>