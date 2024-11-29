<script lang="ts" setup>
import headshot from "@/assets/muff-headshot.jpg";
import { ref } from "vue";
</script>

<script lang="ts">
const headshotUrl = ref(headshot);
</script>

<template>
  <div class="flex flex-col text-dark">
    <div class="relative">
      <img :src="headshotUrl" class="h-96 w-full object-cover" />
      <h1 class="absolute inset-0 flex items-center justify-center text-center text-white">Dr. Deverin Muff</h1>
    </div>

    <div class="container mx-auto xl:px-60 px-10 mt-10">
    <section>
        <h2>About Me</h2>
        <p>
          Hi, I'm Dr. Deverin Muff, and I'm passionate about helping athletes, parents, 
          and coaches navigate the complexities of athletic identity. As a former Division 
          1 basketball player turned professor and researcher, I've dedicated my career to 
          understanding the unique challenges athletes face—on and off the field.
        </p>
        <p>
          My journey has taught me that athletic success is about more than just performance; 
          it's about finding purpose beyond the game. Too often, athletes struggle with their 
          sense of identity once the final whistle blows. I'm here to change that.
        </p>
        <p>
          With a doctorate in sports management and years of research focused on athletic identity, 
          personality, and transitions, I've created a unique coaching framework to help athletes at 
          every stage of their journey. Whether you're an athlete trying to balance sport and life, a 
          parent supporting your child's dreams, or a coach shaping future stars, I provide tools, 
          strategies, and support to build well-rounded, purpose-driven individuals.
        </p>
    </section>
    <section>
        <h2>Why I Do This</h2>
        <p>
          After my own transition out of sports, I realized how many athletes feel lost when their 
          playing days end. My mission is to equip athletes with the skills, confidence, and resilience 
          they need to thrive in every aspect of their lives—not just in sports.
        </p>
        <p>
          Through personalized coaching, workshops, and online resources, I'll guide you or your athlete to:
        </p>
          <ul class="list-disc">
            <li>Navigate the challenges of identity foreclosure.</li>
            <li>Identify and develop transferable skills for life after sports.</li>
            <li>Build a balanced, fulfilling life that integrates purpose with performance.</li>
          </ul>
    </section>
    <section>
        <h2>Let's Work Together</h2>
        <p>
          If you're ready to create a future beyond the game, I'm here to help. Together, we'll transform 
          the way you view athletic identity and open doors to new opportunities. Let's start the journey today!
        </p>
      </section>
      <section>
        <router-link to="/services">
          <button class="get-start-btn">Get Started</button>
        </router-link>
      </section>
    </div>
  </div>
</template>

<style scoped>
  h1 {
    @apply sm:text-9xl text-7xl uppercase font-bold;
  }

  h1 > span {
    @apply sm:text-5xl text-3xl;
  }

  h2 {
    @apply text-5xl mb-5 font-semibold;
  }

  p {
    @apply text-2xl mb-6;
  }

  ul {
    @apply text-2xl ml-10 mb-6;
  }

  .get-start-btn {
    @apply py-4 w-full bg-secondary border-2 border-secondary text-white hover:bg-white hover:text-dark rounded my-10 transition-colors text-2xl;
  }
</style>