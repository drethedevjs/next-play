<template>
  <section>
    <div id="cta-container">
      <header>
        <slot name="header"></slot>
      </header>
      <slot name="body"></slot>
      <slot name="action"></slot>
    </div>
  </section>
</template>

<style scoped>
#cta-container {
  @apply lg:py-24 py-24 sm:px-20 px-8 text-center;
}

p {
  @apply text-3xl text-white mb-10
}

.btn {
  @apply bg-secondary hover:bg-transparent text-white border-2 border-secondary transition-colors py-3 px-5 mb-3 rounded font-bold;
}

.spec-container {
    @apply lg:py-52 py-24 sm:px-20 px-8;
  }
</style>