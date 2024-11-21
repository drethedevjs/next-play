<script lang="ts">
import { Ref, ref } from 'vue';
import Service from '../components/Service.vue';
import serviceData from '../data/services';
import IService from '../interfaces/IService';

export default {
  components: {
    Service
  },
  setup() {
    const services = ref<IService[]>(serviceData);
    const defaultService = {
      id: 1,  // Unique numeric ID for this service
      name: "One-on-One Coaching",
      tagLine: "Personalized Support for Athletes, Parents, and Coaches",
      offerings: [
        "Explore your unique athletic identity and challenges",
        "Develop a balanced approach to sports and life.",
        "Identify transferable skills for life beyond athletics.",
        "Receive actionable strategies tailored to your goals."
      ],
      highlights: [
        "Athletes feeling stuck or uncertain about their future.",
        "Parents seeking to support their child's development.",
        "Coaches wanting to foster holistic growth in their players."
      ],
      duration: ["60-minute sessions"],
      formats: [],
      callToActionText: "Book a Free Discovery Call"
    }

    let selectedService: Ref<IService> = ref(services.value.find(s => s.id === 1) || defaultService);

    const selectService = (serviceId: number) => {
      let element = services.value.find(s => s.id === serviceId);
      if (element)
        selectedService.value = element;
      else
        selectedService.value = services.value[0];
    }

    return {
      selectService,
      selectedService,
      services
    }
  },
}
</script>
<template>
  <div class="page-container">
    <h1>Services</h1>
    <p>
      At the <span class="text-secondary">Next Play Project</span>, we provide tailored solutions to help athletes, 
      parents, and coaches navigate the challenges of athletic identity. Whether 
      you're looking for one-on-one guidance, group workshops, or online resources, 
      our services are designed to support you every step of the way.
    </p>
    <div class="btn-group">
        <button class="service-btn" v-for="service in services" @click="() => selectService(service.id)">{{ service.name }}</button>
    </div>
    <Service>
      <template #heading>
        <h2>{{ selectedService.name }}</h2>
        <h3>{{ selectedService.tagLine }}</h3>
      </template>
    </Service>
  </div>
</template>

<style scoped>
h1 {
  @apply text-center sm:text-8xl text-3xl font-bold uppercase border-b-2 border-b-dark pb-3 mb-10;
}

h2 {
  @apply p-5 text-3xl
}

h3 {
  @apply pl-5 pb-10 text-xl
}

p {
  @apply w-3/4 mx-auto text-center sm:text-3xl text-xl;
}

.page-container {
  @apply container mx-auto;
}

.service-btn {
  @apply py-3 hover:bg-dark text-dark hover:text-white transition-colors grow text-2xl border-b-2 border-b-dark;
}

.btn-group {
  @apply sm:mt-16 mt-10 xl:flex-row flex flex-col;
}
</style>