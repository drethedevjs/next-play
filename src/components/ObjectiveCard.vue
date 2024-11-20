<script lang="ts" setup>
import { defineProps } from "vue";
import ISpecialty from '../interfaces/ISpecialty';
const { specialty } = defineProps<{specialty:ISpecialty}>();

</script>

<template>
  <div class="card">
    <component :is="specialty.hugeIcon" class="huge-icon" ></component>
    <div>
      <h1>{{ specialty.name }}</h1>
      <p>{{ specialty.description}}</p>
    </div>
  </div>
</template>

<style scoped>
h1 {
  @apply uppercase font-semibold mb-3 mt-5 text-secondary;
}

p {
  @apply m-4;
}

.huge-icon {
  @apply w-full h-52 text-dark;
}

.card {
  @apply shadow-md p-3 text-center rounded-lg;
}

img {
  @apply mx-auto mb-3;
}
</style>