<template>
  <nav>
    <div class="nav-container">
      <img src="/next-play-logo.png" class="logo" alt="Next Play logo" />
      <a href="#">Home</a>
      <a href="#">About</a>
      <a href="#">Books</a>
      <a href="#">Contact</a>
    </div>
  </nav>
</template>

<style scoped>
  .logo {
    @apply h-24;
  }

  a {
    @apply ml-5 hover:text-primary transition-colors;
  }

  .nav-container {
    @apply flex flex-row items-center p-10;
  }
</style>