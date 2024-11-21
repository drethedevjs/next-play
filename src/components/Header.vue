<script lang="ts" setup>
import { CancelCircleIcon, Menu01Icon as HamburgerMenu } from 'hugeicons-vue';
import { ref } from 'vue';
</script>
<script lang="ts">
const isMenuOpen = ref(false);

function toggleMenu() {
  isMenuOpen.value = !isMenuOpen.value;
}
</script>
<template>
  <nav>
    <div class="nav-container">
      <img src="/logo-blk-main.png" class="logo" alt="Next Play logo" />
      <a href="#">Home</a>
      <a href="#">About</a>
      <a href="#">Books</a>
      <a href="#">Contact</a>
    </div>
    <div class="mobile-nav-container">
      <HamburgerMenu :size="50" id="hamburger-menu" @click="toggleMenu" />
      <div id="mobile-nav" v-show="isMenuOpen">
        <div class="flex flex-row mt-5">
          <img src="/logo-blk-main.png" class="mobile-logo" alt="Next Play logo" />
          <CancelCircleIcon class="absolute top-5 sm:right-16 right-5 size-8 hover:text-white" @click="toggleMenu" />
        </div>
        <div class="flex flex-col">
          <a href="#">Home</a>
          <a href="#">About</a>
          <a href="#">Books</a>
          <a href="#">Contact</a>
        </div>
      </div>
    </div>
  </nav>
</template>

<style scoped>
  .logo {
    @apply sm:h-24 h-10;
  }

  .mobile-logo {
    @apply h-20 w-32;
  }

  a {
    @apply ml-5 hover:text-secondary transition-colors;
  }

  #hamburger-menu {
    @apply active:text-primary;
  }

  .nav-container {
    @apply flex flex-row items-center p-10 text-3xl;
  }

  .mobile-nav-container {
    @apply flex flex-row items-center p-10;
  }

  #mobile-nav {
    @apply bg-primary left-0 top-0 fixed w-3/4 h-full;

    a {
      @apply border-b-2 border-b-dark py-5 text-3xl hover:text-white active:text-secondary;
    }
  }

  @media (max-width: 1008px) {
    .nav-container {
      @apply hidden;
    }
  }

  @media (min-width: 1009px) {
    .mobile-nav-container {
      @apply hidden;
    }
  }
</style>