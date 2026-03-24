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
import type INavLinks from "../interfaces/INavLinks";

const headerLinks = ref<INavLinks[]>(
  navLinks.map(link => ({
    ...link,
    showSubmenu: link.showSubmenu ?? false,
    subMenu: link.subMenu?.map(subLink => ({ ...subLink }))
  }))
);

const isMenuOpen = ref(false);
const router = useRouter();

function closeAllSubmenus() {
  headerLinks.value.forEach(link => {
    link.showSubmenu = false;
  });
}

function navigate(to: string) {
  isMenuOpen.value = false;
  closeAllSubmenus();
  router.push(to);
}

function toggleMenu() {
  isMenuOpen.value = !isMenuOpen.value;

  if (!isMenuOpen.value) {
    closeAllSubmenus();
  }
}

function toggleSubMenu(link: INavLinks, show?: boolean) {
  if (typeof show === "boolean") {
    link.showSubmenu = show;
    return;
  }

  link.showSubmenu = !link.showSubmenu;
}

function isExternalLink(path: string) {
  return path.startsWith("http");
}

function handleMobileParentClick(link: INavLinks) {
  if (link.subMenu?.length) {
    toggleSubMenu(link);
    return;
  }

  navigate(link.path);
}

function handleExternalLinkClick() {
  isMenuOpen.value = false;
  closeAllSubmenus();
}
</script>

<template>
  <nav>
    <div class="nav-container">
      <img src="/logo-blk-main.png" class="logo" alt="Next Play logo" />

      <ul class="flex flex-row">
        <template v-for="link in headerLinks" :key="link.path">
          <li
            v-if="link.isActive"
            class="relative"
            @mouseover="toggleSubMenu(link, true)"
            @mouseleave="toggleSubMenu(link, false)"
          >
            <router-link :to="link.path">
              <span class="top-link">{{ link.name }}</span>
            </router-link>

            <ul
              v-if="link.subMenu?.length"
              v-show="link.showSubmenu"
              class="sublink-container bg-primary"
            >
              <li
                v-for="subLink in link.subMenu"
                :key="subLink.path"
                v-show="subLink.isActive"
                class="sublink"
              >
                <a
                  v-if="isExternalLink(subLink.path)"
                  :href="subLink.path"
                  target="_blank"
                  rel="noopener noreferrer"
                  @click="handleExternalLinkClick"
                >
                  {{ subLink.name }}
                </a>

                <router-link v-else :to="subLink.path">
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
          <template v-for="link in headerLinks" :key="`${link.path}-mobile`">
            <li v-if="link.isActive" class="mobile-link">
              <div class="flex justify-between px-5 items-center">
                <span
                  @click="handleMobileParentClick(link)"
                  class="active:text-secondary"
                >
                  {{ link.name }}
                </span>

                <button
                  v-if="link.subMenu?.length"
                  type="button"
                  @click.stop="toggleSubMenu(link)"
                >
                  <PlusSignIcon v-show="!link.showSubmenu" />
                  <MinusSignIcon v-show="link.showSubmenu" />
                </button>
              </div>

              <ul v-show="link.showSubmenu" class="mobile-sublink-container">
                <li
                  v-for="subLink in link.subMenu"
                  :key="`${subLink.path}-mobile`"
                  v-show="subLink.isActive"
                  class="mobile-sublink"
                >
                  <a
                    v-if="isExternalLink(subLink.path)"
                    :href="subLink.path"
                    target="_blank"
                    rel="noopener noreferrer"
                    @click="handleExternalLinkClick"
                  >
                    {{ subLink.name }}
                  </a>

                  <span v-else @click="navigate(subLink.path)">
                    {{ subLink.name }}
                  </span>
                </li>
              </ul>
            </li>
          </template>
        </ul>
      </div>
    </div>
  </nav>
</template>
