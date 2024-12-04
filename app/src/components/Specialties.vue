<script lang="ts" setup>
import ISpecialty from '../interfaces/ISpecialty';
import ObjectiveCard from './ObjectiveCard.vue';
</script>

<script lang="ts">
import { ref } from 'vue';
import specialties from '../data/specialties';

const specs = ref<ISpecialty[]>(specialties);

</script>

<template>
  <div class="spec-container">
    <div class="heading-intro">
      <h1 class="pane-header">Our Specialties</h1>
      <h2>How we help you with your next major play</h2>
      <p>
        At the Next Play Project, we provide tailored solutions to help athletes, parents, and coaches navigate the challenges of athletic identity.
        Whether you're looking for one-on-one guidance, group workshops, or online resources, our services are designed to support you every step of the way.
      </p>
    </div>
    <div id="objective-card-container">
      <ObjectiveCard v-for="spec in specs" :specialty="spec" key="spec.id" />
    </div>
  </div>
</template>

<style scoped>
  h2 {
    @apply text-4xl sm:text-5xl mb-3 font-bold;
  }

  p {
    @apply text-slate-400;
  }

  #objective-card-container {
    @apply grid sm:grid-cols-2 lg:grid-cols-3 grid-cols-1 gap-6 mt-10 w-full xl:w-11/12 xl:mx-auto;
  }

  .spec-container {
    @apply lg:py-36 py-24 sm:px-20 px-8;
  }

  .heading-intro {
    @apply mx-auto text-center sm:w-2/3;
  }
</style>