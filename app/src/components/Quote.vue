<template>
  <p>
    <slot name="quote">
      Add a quote
    </slot>
  </p>
</template>

<style scoped>
p {
  @apply bg-cream p-6 my-10 rounded-lg italic;
}
</style>