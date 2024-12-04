<script lang="ts" setup>
import { Clock02Icon, ComputerIcon, Idea01Icon, MoneySavingJarIcon } from 'hugeicons-vue';
import IServiceProps from '../interfaces/IServiceProps';
const { highlightHeading, hasFormats, hasDurations, callToActionBtnTxt, ctaBtnLinkPath } = defineProps<IServiceProps>();
</script>
<template>
  <slot name="heading"></slot>

  <h4>What's Included</h4>
  <slot name="offerings"></slot>

  <div class="flex flex-row gap-3" v-if="highlightHeading">
    <Idea01Icon class="text-secondary" />
    <h4>{{ highlightHeading }}</h4>
  </div>
  <slot name="highlights"></slot>

  <div class="flex flex-row gap-3" v-if="hasFormats">
    <ComputerIcon class="text-secondary" />
    <h4>Format</h4>
  </div>
  <slot name="format"></slot>

  <div class="flex flex-row gap-3" v-if="hasDurations">
    <Clock02Icon class="text-secondary" />
    <h4>Duration</h4>
  </div>
  <slot name="duration"></slot>

  <div class="flex flex-row gap-3">
    <MoneySavingJarIcon class="text-secondary" />
    <h4>Pricing</h4>
  </div>
  <slot name="pricing">
    Contact us for pricing.
  </slot>
  <router-link :to="ctaBtnLinkPath" v-show="ctaBtnLinkPath">
    <button class="action-btn">{{ callToActionBtnTxt }}</button>
  </router-link>

  <button class="disabled-btn action-btn" v-show="!ctaBtnLinkPath">Coming Soon</button>
</template>

<style scoped>
h4 {
  @apply text-2xl uppercase font-semibold mb-4;
}

button.disabled-btn {
  @apply opacity-50 cursor-not-allowed;
}
</style>