<script lang="ts" setup>
import {
  CancelCircleIcon,
  Menu01Icon as HamburgerMenu,
  MinusSignIcon,
  PlusSignIcon
} from "hugeicons-vue";
import { ref } from "vue";
import { useRouter } from "vue-router";
import navLinks from "../data/navLinks";
import INavLinks from "../interfaces/INavLinks";

const headerLinks = ref<INavLinks[]>(navLinks);
const isMenuOpen = ref(false);

const router = useRouter();
function navigate(to: string) {
  toggleMenu();
  // close all open sub menus
  headerLinks.value.map(l => (l.showSubmenu = false));
  router.push(to);
}

function toggleMenu() {
  isMenuOpen.value = !isMenuOpen.value;
}

const toggleSubMenu = (link: INavLinks, show: boolean) => {
  link.showSubmenu = show;
};
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
              <span class="top-link">{{ link.name }}</span>
            </router-link>
            <div v-if="link.subMenu && link.subMenu.length > 0">
              <ul
                v-show="link.showSubmenu"
                class="sublink-container bg-primary"
                @mouseover="link.showSubmenu = true"
                @mouseleave="link.showSubmenu = false"
              >
                <li
                  v-for="subLink in link.subMenu"
                  v-show="link.showSubmenu && subLink.isActive"
                  :key="link.name"
                  class="sublink"
                >
                  <router-link :to="subLink.path">
                    {{ subLink.name }}
                  </router-link>
                </li>
              </ul>
            </div>
          </li>
        </template>
      </ul>
    </div>
    <div class="mobile-nav-container">
      <HamburgerMenu :size="70" id="hamburger-menu" @click="toggleMenu" />
      <div class="w-full">
        <router-link to="/">
          <img
            src="/logo-blk-main.png"
            id="mobile-header-logo"
            alt="Next Play logo"
          />
        </router-link>
      </div>
      <div id="mobile-nav" v-show="isMenuOpen">
        <div class="flex flex-row mt-5">
          <img
            src="/logo-blk-main.png"
            class="mobile-logo"
            alt="Next Play logo"
          />
          <CancelCircleIcon
            class="absolute top-5 sm:right-16 right-5 size-8 hover:text-white"
            @click="toggleMenu"
          />
        </div>
        <ul>
          <template v-for="link in headerLinks">
            <li v-if="link.isActive" class="mobile-link">
              <div class="flex justify-between px-5 items-center">
                <span
                  @click="navigate(link.path)"
                  class="active:text-secondary"
                  >{{ link.name }}</span
                >
                <PlusSignIcon
                  v-show="link.subMenu?.length && !link.showSubmenu"
                  @click.prevent="toggleSubMenu(link, true)"
                />
                <MinusSignIcon
                  v-show="link.subMenu?.length && link.showSubmenu"
                  @click.prevent="toggleSubMenu(link, false)"
                />
              </div>
            </li>
            <ul v-show="link.showSubmenu" class="mobile-sublink-container">
              <li
                :key="link.name"
                v-for="subLink in link.subMenu"
                v-show="link.showSubmenu && subLink.isActive"
                class="mobile-sublink"
                @click="navigate(subLink.path)"
              >
                {{ subLink.name }}
              </li>
            </ul>
          </template>
        </ul>
      </div>
    </div>
  </nav>
</template>
