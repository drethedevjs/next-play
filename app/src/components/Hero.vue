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
      <p class="mission-line">
        We exist to help athletes find their <span class="text-secondary">next play</span> during their life after sports.
      </p>
      <div class="action-btns">
        <router-link to="/schedule">
          <button class="book-speaker-btn btn">Book Speaker</button>
        </router-link>
        <router-link to="/subscribe">
          <button class="subscribe-btn btn">Subscribe to Newsletter</button>
        </router-link>
      </div>
    </div>
    <div class="image-side relative">
      <img :src="logoUrl" class="hero-logo" />
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
    @apply text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary;
  }

  .action-side {
    @apply p-10 lg:w-1/2 w-full text-dark text-right;
  }

  .image-side {
    @apply xl:w-1/2 w-full hidden lg:block;
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
    @apply flex flex-row mt-6 place-content-end;
  }

  .btn {
    @apply sm:py-6 sm:px-9 py-3 px-3 border-2 rounded-md font-bold md:text-xl;
  }

  .book-speaker-btn {
    @apply border-secondary bg-secondary text-white mr-5 hover:text-dark hover:bg-white transition-colors;
  }

  .subscribe-btn {
    @apply border-primary hover:bg-primary transition-colors;
  }

  .hero-logo {
    @apply xl:object-cover xl:h-full xl:scale-100 xl:mt-0 scale-150 mt-20 w-full hover:scale-105 hover:xl:rotate-1 xl:rotate-3 hover:rotate-45 rotate-90 transition-transform;
  }
</style>