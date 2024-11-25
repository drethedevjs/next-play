<script lang="ts">
import { ref } from "vue";
import faqData from "../data/faqs";
import IFaqs from "../interfaces/IFaqs";

export default {
  setup () {
    const faqs = ref<IFaqs[]>(faqData);
    return {
      faqs
    }
  }
}
</script>
<template>
  <section>
    <div class="container mx-auto xl:px-52 px-10">
      <h1>FAQ</h1>
      <div class="qna" v-for="faq in faqs" :key="faq.id">
        <p class="question">{{ faq.id }} // {{ faq.question }}</p>
        <p class="answer">{{ faq.answer }}</p>
        <div v-if="faq.hasList">
          <ul>
            <li class="list-disc" v-for="item in faq.list">{{ item }}</li>
          </ul>
        </div>
      </div>
    </div>

  </section>
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

.answer {
  @apply pb-3;
}

li {
  @apply md:ml-20 ml-10;
}
</style>