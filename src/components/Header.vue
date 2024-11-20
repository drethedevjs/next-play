<template>
  <nav>
    <div class="nav-container">
      <img src="/logo-blk-main.png" class="logo" alt="Next Play logo" />
      <a href="#">Home</a>
      <a href="#">About</a>
      <a href="#">Books</a>
      <a href="#">Contact</a>
    </div>
  </nav>
</template>

<style scoped>
  .logo {
    @apply sm:h-24 h-10;
  }

  a {
    @apply ml-5 hover:text-secondary transition-colors;
  }

  .nav-container {
    @apply flex flex-row items-center p-10;
  }
</style>