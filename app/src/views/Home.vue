<script setup lang="ts">
import { RouterLink } from "vue-router";
import Navigation from "../classes/Navigation";
import CallToAction from "../components/CallToAction.vue";
import Hero from "../components/Hero.vue";
import Specialties from "../components/Specialties.vue";
</script>

<template>
  <Hero />
  <Specialties />
  <section id="home">
    <CallToAction class="bg-dark">
      <template #header>
        <h1 class="pane-header">Ready to Start?</h1>
      </template>
      <template #body>
        <p class="text-white text-3xl">
          Take the first step toward transforming your athletic journey. Whether
          you're an athlete redefining your purpose, a parent seeking guidance,
          or a coach shaping tomorrow's leaders, we're here to help.
        </p>
      </template>
      <template #action>
        <router-link :to="`${Navigation.SCHEDULE}`">
          <button class="btn ready-btn">Book Your Free Discovery Call</button>
        </router-link>
      </template>
    </CallToAction>

    <CallToAction>
      <template #header>
        <h1 class="pane-header">Got Questions</h1>
      </template>
      <template #body>
        <p class="text-dark text-3xl">
          Check out our <span class="text-secondary">FAQ</span> page or reach
          out via our <span class="text-secondary">Contact Us</span> page for
          more details.
        </p>
      </template>
      <template #action>
        <router-link :to="`${Navigation.FAQ}`">
          <button class="btn got-questions-btn mr-3">FAQ</button>
        </router-link>
        <router-link to="/contact">
          <button class="btn got-questions-btn">Contact Us</button>
        </router-link>
      </template>
    </CallToAction>
  </section>
</template>
