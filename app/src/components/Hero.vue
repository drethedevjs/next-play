<script lang="ts" setup>
import logo from "@/assets/logo-blk-main.png";
import { ref } from "vue";
</script>

<script lang="ts">
const logoUrl = ref(logo);
</script>

<template>
  <div id="hero" class="lg:flex lg:flex-row text-dark">
    <div class="action-side">
      <h1>
        <span class="the-text">The</span><br /><span class="next-play-text"
          >Next Play</span
        >
        Project
      </h1>
      <p class="tag-line">Coaching. Workshops. Resources.</p>
      <p class="mission-line">
        We exist to help athletes find their
        <span class="text-secondary">next play</span> during their life after
        sports.
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
      <div
        class="absolute bottom-0 left-0 w-full h-1/3 bg-linear-to-b from-transparent to-white"
      ></div>
    </div>
  </div>
</template>
