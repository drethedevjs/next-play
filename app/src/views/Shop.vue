<script lang="ts" setup>
import { onMounted } from 'vue';

const initializePayhipEmbed = () => {
  const existingScript = document.querySelector('script[src="https://payhip.com/embed-page.js?v=24u68984"]');
    if (existingScript) {
      // If the script already exists, re-trigger it
      (window as any).PayhipEmbedPage?.init();
    }
};

onMounted(() => initializePayhipEmbed());

</script>
<template>
  <div class="np-container">
    <h1 class="page-h1">Shop</h1>
    <div class="place-items-center mb-10" id="payhip-embed-container">
      <div class="payhip-embed-page" data-key="R1IbG"></div>
    </div>
  </div>
</template>
