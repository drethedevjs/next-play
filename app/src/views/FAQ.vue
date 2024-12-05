<script lang="ts" setup>
import faqs from "../data/faqs";
</script>
<template>
  <div class="container mx-auto xl:px-52 px-10">
    <h1>FAQ</h1>
    <section>
      <ul class="mb-5 border-b-2 pb-5">
        <li class="question-list" v-for="faq in faqs" :key="faq.id">
          <a :href="`#${faq.id.toString()}`"
            >{{ faq.id }} // {{ faq.question }}</a
          >
        </li>
      </ul>
    </section>
    <section>
      <div class="qna" v-for="faq in faqs" :key="faq.id">
        <p class="question" :id="faq.id.toString()">
          {{ faq.id }} // {{ faq.question }}
        </p>
        <p class="answer">{{ faq.answer }}</p>
        <div v-if="faq.hasList">
          <ul>
            <li class="list-disc" v-for="item in faq.list">{{ item }}</li>
          </ul>
        </div>

        <a href="#top">
          <p class="text-right text-secondary text-xl">scroll to top</p>
        </a>
      </div>
    </section>
  </div>
</template>

<style scoped>
h1 {
  @apply text-center sm:text-8xl text-5xl font-bold uppercase border-b-2 border-b-dark pb-3 mb-10;
}

.qna {
  @apply mb-8 border-b-4 pb-3 sm:text-3xl text-xl;
}

.question {
  @apply font-bold text-secondary uppercase mb-3;
}

.question-list {
  @apply text-2xl hover:text-secondary mb-3;
}

.answer {
  @apply pb-3;
}

li.list-disc {
  @apply md:ml-20 ml-10;
}
</style>
