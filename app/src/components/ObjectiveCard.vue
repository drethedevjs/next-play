<script lang="ts" setup>
import Navigation from "../classes/Navigation";
import ISpecialty from "../interfaces/ISpecialty";
const { specialty } = defineProps<{ specialty: ISpecialty }>();
</script>

<template>
  <div id="objective-card" class="card">
    <component :is="specialty.hugeIcon" class="huge-icon"></component>
    <h2>{{ specialty.name }}</h2>
    <p>{{ specialty.description }}</p>
    <router-link :to="`${Navigation.SERVICES}?id=${specialty.id}`">
      <button class="btn">Learn More</button>
    </router-link>
  </div>
</template>
