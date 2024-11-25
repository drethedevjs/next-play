<script lang="ts" setup>
import { ref } from 'vue';
import Sport from '../classes/Sports';
import servicesData from '../data/services';
import IService from '../interfaces/IService';

const services = ref<IService[]>(servicesData);

const sports = Object.values(Sport) as string[];
</script>
<template>
  <section>
    <div class="container mx-auto xl:px-52 px-5">
      <h1>Contact</h1>
      <form>
        <div class="space-y-12">
          <div class="border-b border-gray-900/10 pb-12">
            <div class="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
              <div class="md:col-span-3 sm:col-span-full">
                <label for="first-name">First name</label>
                <div class="mt-2">
                  <input type="text" name="first-name" id="first-name" autocomplete="given-name" />
                </div>
              </div>

              <div class="md:col-span-3 sm:col-span-full">
                <label for="last-name">Last name</label>
                <div class="mt-2">
                  <input type="text" name="last-name" id="last-name" autocomplete="family-name" />
                </div>
              </div>

              <div class="col-span-full">
                <label for="email">Email address</label>
                <div class="mt-2">
                  <input id="email" name="email" type="email" autocomplete="email" />
                </div>
              </div>

              <div class="col-span-full">
                <label for="message">Message</label>
                <div class="mt-2">
                  <textarea id="message" name="message"></textarea>
                </div>
              </div>

              <div class="lg:col-span-3 lg:col-start-1 col-span-full">
                <label for="city">City</label>
                <div class="mt-2">
                  <input type="text" name="city" id="city" autocomplete="city" />
                </div>
              </div>

              <div class="lg:col-span-2 col-span-full">
                <label for="region">State / Province</label>
                <div class="mt-2">
                  <input type="text" name="region" id="region" />
                </div>
              </div>

              <div class="lg:col-span-1 col-span-full">
                <label for="postal-code">Postal code</label>
                <div class="mt-2">
                  <input type="text" name="postal-code" id="postal-code" autocomplete="postal-code" />
                </div>
              </div>

              <div class="col-span-full">
                <fieldset>
                  <legend>Service</legend>
                  <small>What service(s) are you interested in?</small>
                  <div class="flex mt-2" v-for="service in services" :key="service.id">
                    <label class="flex items-center">
                      <input type="checkbox" :id="service.name" :name="service.name" />
                      {{ service.name }}
                    </label>
                  </div>
                </fieldset>
              </div>
              <div class="col-span-full">
                <fieldset>
                  <legend>Sports</legend>
                  <small>What organized sports have you played?</small>
                  <div class="grid xl:grid-cols-3 sm:grid-cols-2 mt-2">
                    <label class="flex items-center sm:mb-0 mb-1" v-for="sport in sports" :key="sport">
                      <input type="checkbox" :id="sport" :name="sport" />
                      {{ sport }}
                    </label>
                  </div>
                </fieldset>
              </div>
            </div>
          </div>
        </div>

        <button type="submit">Send</button>
      </form>
    </div>
  </section>
</template>

<style scoped>
button {
  @apply text-3xl w-full py-3 bg-secondary text-white rounded-md mb-10 border-2 border-secondary hover:bg-white hover:text-dark transition-colors;
}

textarea {
  @apply ring-secondary ring-1 rounded-md w-full h-36 p-5 text-2xl;
}

.contact-container {
  @apply container mx-auto xl:px-60 px-10 mt-10;
}

label, legend {
  @apply block sm:text-3xl text-xl text-dark font-semibold;
}

small {
  @apply text-xl;
}

input:is([type="checkbox"]){
  @apply h-8 w-8 mr-5 align-middle;
}

input:not([type="checkbox"]), select {
  @apply h-24 pl-5 sm:text-4xl block w-full rounded-md py-1.5 text-dark shadow-sm ring-1 ring-inset ring-secondary placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-warning;
}

h1 {
  @apply text-center sm:text-8xl text-5xl font-bold uppercase border-b-2 border-b-dark pb-3 mb-10;
}
</style>