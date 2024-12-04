<script setup lang="ts">
import { Copy01Icon } from 'hugeicons-vue';
import brandColors from '../data/colors';

const copyHexValue = (hexValue: string) => {
  navigator.clipboard.writeText(hexValue);
}
</script>
<template>
  <div class="np-container">
    <h1 class="page-h1">Branding</h1>
    
    <h2>Colors</h2>
    <div 
      v-for="color in brandColors"
      class="color flex justify-between"
      :class="[color.bgClassName, color.textColor]"
    >
      {{ color.name }}: {{ color.hexValue }} 
      <Copy01Icon class="copy" @click="() => copyHexValue(color.hexValue)" />
    </div>

    <h2>Logos</h2>
    <small>Click to download logo</small>
    <div class="grid grid-cols-3 gap-5 mb-5">
      <a href="/images/logo-black-MAIN.png" download><img src="/images/logo-black-MAIN.png" /></a>
      <a href="/images/logo-navy-withTanBackgrnd-MAIN.png" download><img src="/images/logo-navy-withTanBackgrnd-MAIN.png" /></a>
      <a href="/images/logo-slate-MAIN.png" download><img src="/images/logo-slate-MAIN.png" /></a>
      <a href="/images/logo-slate-SECONDARY.png" download><img src="/images/logo-slate-SECONDARY.png" /></a>
    </div>
  </div>
</template>

<style scoped>
img {
  @apply border-2 rounded-xl hover:border-secondary;
}
h2 {
  @apply text-5xl mb-5 font-semibold mt-16;
}

.color {
  @apply text-xl font-semibold rounded-md mb-2 p-4 hover:ring-2 hover:ring-charcoal;
}

.copy {
  @apply hover:scale-110 active:text-white active:rotate-12;
}
</style>