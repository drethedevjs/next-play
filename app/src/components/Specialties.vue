<script lang="ts" setup>
import ISpecialty from "../interfaces/ISpecialty";
import ObjectiveCard from "./ObjectiveCard.vue";
</script>

<script lang="ts">
import { ref } from "vue";
import specialties from "../data/specialties";

const specs = ref<ISpecialty[]>(specialties);
</script>

<template>
  <div class="spec-container">
    <div id="specialties" class="heading-intro">
      <h1 class="pane-header">Our Specialties</h1>
      <h2>How we help you with your next major play</h2>
      <p>
        At the Next Play Project, we provide tailored solutions to help
        athletes, parents, and coaches navigate the challenges of athletic
        identity. Whether you're looking for one-on-one guidance, group
        workshops, or online resources, our services are designed to support you
        every step of the way.
      </p>
    </div>
    <div id="objective-card-container">
      <ObjectiveCard v-for="spec in specs" :specialty="spec" key="spec.id" />
    </div>
  </div>
</template>
