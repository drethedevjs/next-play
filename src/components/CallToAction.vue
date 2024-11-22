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
  @apply lg:py-24 py-24 sm:px-20 px-8 text-center 2xl:w-2/3 xl:w-1/2 w-full mx-auto;
}
</style>