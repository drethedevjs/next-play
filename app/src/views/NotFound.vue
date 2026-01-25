<script setup lang="ts">
import { RouterLink } from "vue-router";
import Navigation from "../classes/Navigation";
</script>

<template>
  <div class="np-container text-center">
    <h1 class="page-h1">404 - Out of Bounds</h1>
    <p class="text-2xl mb-6">The page you're looking for doesn't exist.</p>
    <RouterLink :to="Navigation.HOME">
      <button class="action-btn">Go back in the Game</button>
    </RouterLink>
  </div>
</template>
