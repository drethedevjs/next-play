<template>
<h1>Subscribe</h1>
<div class="iframe-container">
  <iframe 
    src="https://deverinmuff.substack.com/embed" 
    frameborder="0">
  </iframe>
</div>
</template>

<style scoped>
h1 {
  @apply text-center sm:text-8xl text-5xl font-bold uppercase border-b-2 border-b-dark pb-3 mb-10;
}

iframe {
  @apply sm:min-h-full sm:w-full h-96 mx-auto;
}

.iframe-container {
  @apply sm:container sm:mx-auto sm:px-56 sm:h-96;
}
</style>