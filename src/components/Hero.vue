<script lang="ts" setup>
import logo from "@/assets/logo-blk-main.png";
import { ref } from "vue";
</script>

<script lang="ts">
const logoUrl = ref(logo);
</script>

<template>
  <div class="lg:flex lg:flex-row text-dark">
    <div class="action-side">
      <h1><span class="the-text">The</span><br><span class="next-play-text">Next Play</span> Project</h1>
      <p class="tag-line">Coaching. Workshops. Resources.</p>
      <p class="mission-line">We exist to help athletes find their the <span class="text-secondary">next play</span> during their life after sports.</p>
      <div class="action-btns">
        <button class="book-me-btn">Book Speaker</button>
        <button class="subscribe-btn">Subscribe to Newsletter</button>
      </div>
    </div>
    <div class="image-side relative">
      <img :src="logoUrl" class="object-cover h-full w-full hover:scale-105 hover:rotate-2 transition-transform" />
      <div class="absolute bottom-0 left-0 w-full h-1/3 bg-gradient-to-b from-transparent to-white"></div>
    </div>
  </div>
</template>

<style scoped>
  h1 {
    @apply sm:text-9xl text-7xl uppercase font-bold;
  }

  .the-text {
    @apply sm:text-5xl text-3xl;
  }

  .next-play-text {
    @apply text-transparent bg-clip-text bg-gradient-to-r from-white to-secondary;
  }

  .action-side {
    @apply p-10 lg:w-1/2 w-full shrink text-white bg-dark;
  }

  .image-side {
    @apply lg:w-1/2 w-full hidden lg:block;
  }

  .mobile-image-pane {
    @apply w-full border-2 visible lg:hidden;
  }

  .tag-line {
    @apply text-3xl;
  }

  .mission-line {
    @apply mt-5 text-xl;
  }

  .action-btns {
    @apply flex flex-row mt-6;
  }

  .book-me-btn {
    @apply py-6 px-9 border-2 border-secondary rounded-md bg-secondary font-bold mr-5 hover:bg-dark transition-colors;
  }

  .subscribe-btn {
    @apply py-6 px-9 border-2 border-primary rounded-md font-bold hover:bg-primary hover:text-dark transition-colors;
  }

  
</style>