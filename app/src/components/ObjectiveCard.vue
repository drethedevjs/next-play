<script lang="ts" setup>
import Navigation from '../classes/Navigation';
import ISpecialty from '../interfaces/ISpecialty';
const { specialty } = defineProps<{specialty:ISpecialty}>();
</script>

<template>
  <div class="card">
    <component :is="specialty.hugeIcon" class="huge-icon" ></component>
    <h2>{{ specialty.name }}</h2>
    <p>{{ specialty.description}}</p>
    <router-link :to="`${Navigation.SERVICES}?id=${specialty.id}`">
      <button class="btn">Learn More</button>
    </router-link>
  </div>
</template>

<style scoped>
h2 {
  @apply uppercase font-semibold mb-3 mt-5 text-secondary;
}

p {
  @apply m-4;
}

.huge-icon {
  @apply w-full h-40 text-dark;
}

.card {
  @apply shadow-md p-3 text-center rounded-lg border-2 border-primary;
}

.btn {
  @apply bg-secondary hover:bg-transparent text-white hover:text-dark border-2 border-secondary transition-colors py-3 px-5 mb-3 rounded;
}

img {
  @apply mx-auto mb-3;
}
</style>