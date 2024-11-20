<script lang="ts" setup>
import ISpecialty from '../interfaces/ISpecialty';
import ObjectiveCard from './ObjectiveCard.vue';
</script>

<script lang="ts">
import { ref } from 'vue';
import specialties from '../data/specialties';

const specs = ref<ISpecialty[]>(specialties);
export default {

}
</script>

<template>
  <div class="spec-container">
    <div class="heading-intro">
      <h1>Our Specialties</h1>
      <h2>How can we help you with your next major play</h2>
      <p>Lorem ipsum dolor sit amet consectetur adipiscing elit odio sem quisque cras arcu mi gravida libero feugiat dis aliquet sit.</p>
    </div>
    <div class="grid sm:grid-cols-2 lg:grid-cols-3 grid-cols-1 gap-6 mt-10 w-full xl:w-3/4 xl:mx-auto">
      <ObjectiveCard v-for="spec in specs" :specialty="spec" key="spec.id" />
    </div>
  </div>
</template>

<style scoped>
  h1 {
    @apply uppercase font-semibold mb-3 text-primary text-xl;
  }

  h2 {
    @apply text-4xl sm:text-5xl mb-3 font-bold;
  }

  p {
    @apply text-slate-400;
  }

  .spec-container {
    @apply lg:py-52 py-24 px-20;
  }

  .heading-intro {
    @apply mx-auto text-center sm:w-2/3;
  }
</style>