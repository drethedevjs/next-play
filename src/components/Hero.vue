<script lang="ts" setup>
import headshot from "@/assets/muff-headshot.jpg";
import { ref } from "vue";
</script>

<script lang="ts">
const headshotUrl = ref(headshot);
</script>

<template>
  <div class="lg:flex lg:flex-row">
    <div class="mobile-image-pane">
      <img :src="headshotUrl" class="object-cover w-full" />
    </div>
    <div class="action-side">
      <h1><span>Dr.</span><br>Deverin Muff</h1>
      <p class="tag-line">Speaker. Author. Coach</p>
      <p class="mission-line">We exist to help athletes find their the <span class="text-primary">next play</span> during their life after sports.</p>
      <div class="action-btns">
        <button class="book-me-btn">Book Me</button>
        <button class="subscribe-btn">Subscribe to Newsletter</button>
      </div>
    </div>
    <div class="image-side">
      <img :src="headshotUrl" class="object-cover h-full w-full" />
    </div>
  </div>
</template>

<style scoped>
  h1 {
    @apply sm:text-9xl text-7xl uppercase font-bold;
  }

  h1 > span {
    @apply sm:text-5xl text-3xl;
  }

  .action-side {
    @apply p-10 lg:w-1/2 w-full shrink;
  }

  .image-side {
    @apply lg:w-1/2 w-full hidden lg:block;
  }
  .mobile-image-pane {
    @apply w-full border-2 visible lg:hidden;
  }

  .tag-line {
    @apply text-2xl;
  }

  .mission-line {
    @apply mt-5;
  }

  .action-btns {
    @apply flex flex-row mt-6;
  }

  .book-me-btn {
    @apply py-6 px-9 border-2 border-primary rounded-md bg-primary font-bold mr-5 hover:bg-white  transition-colors;
  }

  .subscribe-btn {
    @apply py-6 px-9 border-2 border-primary rounded-md font-bold hover:bg-primary hover:text-white transition-colors;
  }
</style>