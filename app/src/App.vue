<script setup lang="ts">
import { Analytics } from "@vercel/analytics/vue";
import Footer from "./components/TheFooter.vue";
import Header from "./components/TheHeader.vue";
</script>

<template>
  <Analytics />
  <div class="flex flex-col min-h-screen">
    <Header />
    <main class="grow">
      <router-view></router-view>
    </main>
    <Footer />
  </div>
</template>
