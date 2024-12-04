<script lang="ts">
import { Idea01Icon, UserCircleIcon } from 'hugeicons-vue';
import { Ref, ref, watch } from 'vue';
import { useRoute, useRouter } from 'vue-router';
import Service from '../components/Service.vue';
import serviceData from '../data/services';
import IService from '../interfaces/IService';

export default {
  components: {
    Service,
    Idea01Icon
  },
  mounted() {
    const searchParams = new URLSearchParams(this.$route.query as Record<string, string>);
    if (searchParams.has("id")) {
      let id = searchParams.get("id");
      this.selectedService = this.services.find(s => s.id === Number(id)) || this.defaultService;
    }
  },
  setup() {
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
      highlightHeading: "Ideal For",
      highlights: [
        "Athletes feeling stuck or uncertain about their future.",
        "Parents seeking to support their child's development.",
        "Coaches wanting to foster holistic growth in their players."
      ],
      duration: ["60-minute sessions"],
      formats: [],
      callToActionText: "Book a Free Discovery Call",
      pricing: "Starting at [Insert Price] per session",
      hugeIcon: UserCircleIcon,
      ctaBtnLinkPath: "/schedule"
    }
    const router = useRouter();
    const route = useRoute();
    const services = ref<IService[]>(serviceData);
    let selectedService: Ref<IService> = ref(services.value.find(s => s.id === 1) || defaultService);

    watch(
      () => route.query.id,
      (newId) => {
        if (newId) {
          selectedService.value = services.value.find(s => s.id === Number(newId)) || defaultService;
        }
      }
    );

    const selectService = (serviceId: number) => {
      let element = services.value.find(s => s.id === serviceId);
      if (element) {
        selectedService.value = element;
        router.push(`/services?id=${selectedService.value.id}`);
      }
      else
        selectedService.value = services.value[0];
    }

    const updateButtonServiceClass = (serviceId: number) => selectedService.value.id === serviceId ? "bg-secondary text-white" : "";

    return {
      selectService,
      selectedService,
      services,
      updateButtonServiceClass,
      defaultService
    }
  },
}
</script>
<template>
  <div class="page-container">
    <h1>Services</h1>
    <p id="header-message">
      At the <span class="text-secondary">Next Play Project</span>, we provide tailored solutions to help athletes, 
      parents, and coaches navigate the challenges of athletic identity. Whether 
      you're looking for one-on-one guidance, group workshops, or online resources, 
      our services are designed to support you every step of the way.
    </p>
    <div class="btn-group">
        <button
          class="service-btn"
          :class="updateButtonServiceClass(service.id)"
          v-for="service in services"
          @click="() => selectService(service.id)"
        >
        <div class="flex gap-2 place-content-center">
          <component :is="service.hugeIcon" class="service-btn-icon"></component>
          {{ service.name }}
        </div>
        </button>
    </div>
    <div class="p-10 xl:mx-52">
      <Service
        :highlightHeading="selectedService.highlightHeading"
        :hasFormats="!!selectedService.formats.length"
        :hasDurations="!!selectedService.duration.length"
        :callToActionBtnTxt="selectedService.callToActionText"
        :ctaBtnLinkPath="selectedService.ctaBtnLinkPath"
      >
        <template #heading>
          <h2>{{ selectedService.name }}</h2>
          <h3>{{ selectedService.tagLine }}</h3>
        </template>
        <template #offerings>
          <ul>
            <li v-for="offering in selectedService.offerings">
              {{ offering }}
            </li>
          </ul>
        </template>
        <template #highlightHeading>
          <div class="flex flex-row gap-3">
            <Idea01Icon />
            <h4>Topics Include</h4>
          </div>
        </template>
        <template #highlights>
          <ul>
            <li v-for="highlight in selectedService.highlights">
              {{ highlight }}
            </li>
          </ul>
        </template>

        <template #format>
          <ul>
            <li v-for="format in selectedService.formats">
              {{ format }}
            </li>
          </ul>
        </template>

        <template #duration>
          <ul>
            <li class="ml-5 text-xl" v-for="duration in selectedService.duration">
              {{ duration }}
            </li>
          </ul>
        </template>

        <template #pricing>
          <p class="ml-5 text-xl">{{ selectedService.pricing }}</p>
        </template>
      </Service>
    </div>
  </div>
</template>

<style scoped>
h1 {
  @apply text-center sm:text-8xl text-5xl font-bold uppercase border-b-2 border-b-dark pb-3 mb-10;
}

h2 {
  @apply text-3xl pb-4 font-semibold uppercase;
}

h3 {
  @apply pb-10 text-xl text-secondary;
}

h4 {
  @apply text-2xl uppercase font-semibold mb-4;
}

#header-message {
  @apply w-3/4 mx-auto text-center sm:text-3xl text-xl;
}

ul {
  @apply mb-5;
}

li {
  @apply text-xl list-disc ml-10;
}

.page-container {
  @apply container mx-auto;
}

.service-btn {
  @apply py-3 hover:bg-dark hover:text-white transition-colors grow text-2xl border-b-2 border-b-dark;
}

.btn-group {
  @apply sm:mt-16 mt-10 xl:flex-row flex flex-col;
}

@media (max-width: 1280px) {
  .service-btn-icon {
    @apply hidden;
  }
}
</style>
