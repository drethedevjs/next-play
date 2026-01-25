<script lang="ts" setup>
const currentYear: number = new Date().getFullYear();
</script>

<template>
  <footer role="contentinfo" class="bg-dark">
    <div>
      Copyright <span class="text-secondary">Next Play</span> 2024 -
      {{ currentYear }}
    </div>
    <div class="mt-5 scale-75">
      Built and Powered By
      <span class="text-secondary hover:text-cream">
        <a href="https://honeystack.solutions" target="_blank">Honeystack</a>
      </span>
    </div>
  </footer>
</template>
