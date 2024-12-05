<script setup lang="ts">
import { Copy01Icon } from 'hugeicons-vue';
import { reactive } from 'vue';
import brandColorsData from '../data/colors';
import { IColor } from '../interfaces/IBrandColor';

const brandColors = reactive(brandColorsData);

const copyHexValue = (color: IColor) => {
  color.copied = true;
  navigator.clipboard.writeText(color.hexValue);
  setTimeout(() => {
    change(color);
  }, 3000)
}

const change = (color: IColor) => {
  color.copied = !color.copied;
}
</script>
<template>
  <div class="np-container">
    <h1 class="page-h1">Branding</h1>

    <h2>Colors</h2>
    <h3>Primary</h3>
    <div class="grid lg:grid-cols-3 gap-3">
      <div 
        v-for="color in brandColors.primary"
        class="primary-color flex justify-between"
        :class="[color.bgClassName, color.textColor]"
      >
        {{ color.name }}: {{ color.hexValue }}
        <Copy01Icon class="primary-copy" @click="() => copyHexValue(color)" v-show="!color.copied" />
        <p class="animate-bounce" v-show="color.copied">Copied!</p>
      </div>
    </div>

    <h3>Others</h3>
    <div 
      v-for="color in brandColors.others"
      class="color flex justify-between"
      :class="[color.bgClassName, color.textColor]"
    >
      {{ color.name }}: {{ color.hexValue }}
      <Copy01Icon class="copy" @click="() => copyHexValue(color)" v-show="!color.copied" />
      <p class="animate-bounce" v-show="color.copied">Copied!</p>
    </div>

    <h2>Logos</h2>
    <small>Click to download logo</small>
    <h3>Main</h3>
    <div class="grid lg:grid-cols-3 grid-cols-2 gap-5 mb-5">
      <a href="/images/main/logo-black-MAIN.png" download><img src="/images/main/logo-black-MAIN.png" /></a>
      <a href="/images/main/logo-navy-withTanBackgrnd-MAIN.png" download><img src="/images/main/logo-navy-withTanBackgrnd-MAIN.png" /></a>
      <a href="/images/main/logo-slate-MAIN.png" download><img src="/images/main/logo-slate-MAIN.png" /></a>
      <a href="/images/main/logo-navy-MAIN.png" download><img src="/images/main/logo-navy-MAIN.png" /></a>
      <a href="/images/main/logo-burnt-orange-MAIN.png" download><img src="/images/main/logo-burnt-orange-MAIN.png" /></a>
      <a href="/images/main/logo-orange-MAIN.png" download><img src="/images/main/logo-orange-MAIN.png" /></a>
      <a href="/images/main/logo-sky-blue-MAIN.png" download><img src="/images/main/logo-sky-blue-MAIN.png" /></a>
      <a href="/images/main/logo-tan-MAIN.png" download><img src="/images/main/logo-tan-MAIN.png" /></a>
    </div>

    <h3>Secondary</h3>
    <div class="grid lg:grid-cols-3 grid-cols-2 gap-5 mb-5">
      <a href="/images/secondary/logo-burnt-orange-SECONDARY.png" download><img src="/images/secondary/logo-burnt-orange-SECONDARY.png" /></a>
      <a href="/images/secondary/logo-cream-SECONDARY.png" download><img src="/images/secondary/logo-cream-SECONDARY.png" /></a>
      <a href="/images/secondary/logo-forrest-green-SECONDARY.png" download><img src="/images/secondary/logo-forrest-green-SECONDARY.png" /></a>
      <a href="/images/secondary/logo-navy-SECONDARY.png" download><img src="/images/secondary/logo-navy-SECONDARY.png" /></a>
      <a href="/images/secondary/logo-orange-SECONDARY.png" download><img src="/images/secondary/logo-orange-SECONDARY.png" /></a>
      <a href="/images/secondary/logo-sky-blue-SECONDARY.png" download><img src="/images/secondary/logo-sky-blue-SECONDARY.png" /></a>
      <a href="/images/secondary/logo-slate-SECONDARY.png" download><img src="/images/secondary/logo-slate-SECONDARY.png" /></a>
    </div>
  </div>
</template>

<style scoped>
img {
  @apply border-2 rounded-xl hover:border-secondary;
}

h2 {
  @apply text-5xl mb-5 font-bold mt-16;
}

h3 {
  @apply text-3xl mb-5 font-semibold uppercase mt-5;
}

.color {
  @apply text-xl font-semibold rounded-md mb-2 p-4 hover:ring-2 hover:ring-charcoal;
}

.primary-color {
  @apply p-10 rounded-xl text-3xl hover:ring-2 hover:ring-charcoal;
}

.primary-copy {
  @apply hover:scale-150 scale-125 active:text-white active:rotate-12;
}

.copy {
  @apply hover:scale-110 active:text-white active:rotate-12;
}
</style>