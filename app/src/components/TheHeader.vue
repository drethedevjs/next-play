<script lang="ts" setup>
import { CancelCircleIcon, Menu01Icon as HamburgerMenu } from 'hugeicons-vue';
import { ref } from 'vue';
import { useRouter } from 'vue-router';
import navLinks from '../data/navLinks';
import INavLinks from '../interfaces/INavLinks';

const headerLinks = ref<INavLinks[]>(navLinks)
const isMenuOpen = ref(false);

const router = useRouter();
function navigate(to: string) {
  toggleMenu();
  router.push(to);
}

function toggleMenu() {
  isMenuOpen.value = !isMenuOpen.value;
}
</script>

<template>
  <nav>
    <div class="nav-container">
      <img src="/logo-blk-main.png" class="logo" alt="Next Play logo" />
      <ul class="flex flex-row">
          <template v-for="link in headerLinks">
            <li
              v-if="link.isActive"
              @mouseover="link.showSubmenu = true"
              @mouseleave="link.showSubmenu = false"
            >
              <router-link :to="link.path">
                <span class="top-link">{{link.name}}</span>
              </router-link>
              <ul v-show="link.showSubmenu" class="sublink-container"
                @mouseover="link.showSubmenu = true"
                @mouseleave="link.showSubmenu = false"
              >
                <li v-for="subLink in link.subMenu" v-show="link.showSubmenu && subLink.isActive" :key="link.name" class="sublink">
                  <router-link :to="subLink.path">
                    {{ subLink.name }}
                  </router-link>
                </li>
              </ul>
            </li>
          </template>
        </ul>
    </div>
    <div class="mobile-nav-container">
      <HamburgerMenu :size="70" id="hamburger-menu" @click="toggleMenu" />
      <div class="w-full">
        <router-link to="/">
          <img src="/logo-blk-main.png" id="mobile-header-logo" alt="Next Play logo" />
        </router-link>
      </div>
      <div id="mobile-nav" v-show="isMenuOpen">
        <div class="flex flex-row mt-5">
          <img src="/logo-blk-main.png" class="mobile-logo" alt="Next Play logo" />
          <CancelCircleIcon class="absolute top-5 sm:right-16 right-5 size-8 hover:text-white" @click="toggleMenu" />
        </div>
        <ul>
            <template v-for="link in headerLinks">
              <li v-if="link.isActive" @click="navigate(link.path)">
                {{link.name}}
              </li>
            </template>
          </ul>
      </div>
    </div>
  </nav>
</template>

<style scoped>
  .sublink-container {
    @apply bg-primary p-5 rounded-lg absolute mt-0 shadow-lg ml-4;
  }

  .sublink {
    @apply m-0 mb-4 hover:text-white;
  }

  .logo {
    @apply sm:h-24 h-10;
  }

  .mobile-logo {
    @apply h-20 w-32;
  }

  #mobile-header-logo {
    @apply size-40 w-52 mx-auto;
  }

  .top-link {
    @apply ml-5 hover:text-secondary transition-colors;
  }

  #hamburger-menu {
    @apply active:text-primary;
  }

  .nav-container {
    @apply flex flex-row items-center p-10 text-3xl;
  }

  .mobile-nav-container {
    @apply flex flex-row items-center p-5;
  }

  #mobile-nav {
    @apply bg-primary inset-y-0 left-0 fixed w-3/4 h-full z-10 overflow-scroll;

    li {
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