<script lang="ts" setup>
import { toTypedSchema } from '@vee-validate/yup';
import { Field, useForm } from 'vee-validate';
import { reactive, ref } from 'vue';
import { object, string } from 'yup';
import ContactFormData from '../classes/ContactFormData';
import Sport from '../classes/Sports';
import servicesData from '../data/services';
import IService from '../interfaces/IService';
import emailService from '../services/emailService';

const services = ref<IService[]>(servicesData);
const sports = Object.values(Sport) as string[];

let formData = reactive<ContactFormData>(new ContactFormData());
let showNotification = ref<Boolean>(false);

const { resetForm, handleSubmit, isSubmitting, errors } = useForm<ContactFormData>({
  validationSchema: toTypedSchema(
    object({
      firstName: string().transform(x => x.trim()).required("First name is required"),
      lastName: string().required("Last name is required"),
      email: string().email().required("Must be a valid email address."),
      message: string().min(15, "Must be at least 15 characters."),
    }))
});

const scrollToTop = () => window.scrollTo({top: 0, behavior: "smooth"});

const submitForm = handleSubmit(async (values: ContactFormData) => {
  try {
    await emailService.sendEmail(values);
    showNotification.value = true;
    setTimeout(() => {
      showNotification.value = false;
    }, 5000);

    resetForm();
  } catch (error: any) {
    console.error(error?.message ?? "There was an issue with sending the form. Please try again.");
  }

  scrollToTop();
}, () => scrollToTop());
</script>

<template>
  <section>
    <div class="notification-container" :class="showNotification ? 'flex' : 'hidden'">
      <p class="notification">✅ Form Sent!</p>
    </div>
    <div class="container mx-auto xl:px-52 px-5">
      <h1>Contact</h1>
      <form @submit.prevent="submitForm">
        <div class="space-y-12">
          <div class="pb-12">
            <div class="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
              <div class="md:col-span-3 sm:col-span-full">
                <label for="firstName">First name</label>
                <div class="mt-2">
                  <Field name="firstName" id="firstName" autocomplete="given-name" v-model.lazy.trim="formData.firstName" />
                  <small class="error-message">{{ errors.firstName }}</small>
                </div>
              </div>

              <div class="md:col-span-3 sm:col-span-full">
                <label for="lastName">Last name</label>
                <div class="mt-2">
                  <Field name="lastName" id="lastName" autocomplete="family-name" v-model.lazy.trim="formData.lastName" />
                  <small class="error-message">{{ errors.lastName }}</small>
                </div>
              </div>

              <div class="col-span-full">
                <label for="company">Company</label>
                <div class="mt-2">
                  <Field name="company" id="company" autocomplete="company" v-model.lazy.trim="formData.company" />
                </div>
              </div>

              <div class="col-span-full">
                <label for="email">Email address</label>
                <div class="mt-2">
                  <Field name="email" id="email" autocomplete="email" v-model.lazy.trim="formData.email" />
                  <small class="error-message">{{ errors.email }}</small>
                </div>
              </div>

              <div class="col-span-full">
                <label for="message">Message</label>
                <div class="mt-2">
                  <Field name="message" id="message" autocomplete="message" as="textarea" v-model.lazy.trim="formData.message" />
                  <small class="error-message">{{ errors.message }}</small>
                </div>
              </div>

              <div class="lg:col-span-3 lg:col-start-1 col-span-full">
                <label for="city">City</label>
                <div class="mt-2">
                  <Field name="city" id="city" autocomplete="city" v-model.lazy.trim="formData.city" />
                  <small class="error-message">{{ errors.city }}</small>
                </div>
              </div>

              <div class="lg:col-span-2 col-span-full">
                <label for="region">State / Province</label>
                <div class="mt-2">
                  <Field name="region" id="region" autocomplete="region" v-model.lazy.trim="formData.region" />
                </div>
              </div>

              <div class="lg:col-span-1 col-span-full">
                <label for="postalCode">Postal code</label>
                <div class="mt-2">
                  <Field name="postalCode" id="postalCode" autocomplete="postalCode" v-model.lazy.trim="formData.postalCode" />
                </div>
              </div>

              <div class="col-span-full">
                <fieldset>
                  <legend>Service</legend>
                  <small>What service(s) are you interested in?</small>
                  <div class="flex mt-2" v-for="service in services" :key="service.id">
                    <label class="flex items-center">
                      <Field type="checkbox" :id="service.name" name="services" :value="service.name" :checked="formData.services.includes(service.name)" />
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
                      <Field type="checkbox" :id="sport" name="sports" :value="sport" :checked="formData.sports.includes(sport)" />
                      {{ sport }}
                    </label>
                  </div>
                </fieldset>
              </div>
            </div>
          </div>
        </div>

        <button type="submit" :disabled="isSubmitting" class="action-btn">Send</button>
      </form>
    </div>
  </section>
</template>

<style scoped>
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
  @apply h-24 pl-5 sm:text-4xl text-2xl block w-full rounded-md py-1.5 text-dark shadow-sm ring-1 ring-inset ring-secondary focus:ring-2 focus:ring-inset focus:ring-warning;
}

h1 {
  @apply text-center sm:text-8xl text-5xl font-bold uppercase border-b-2 border-b-dark pb-3 mb-10;
}

.error-message {
  @apply text-red-600 mt-1 inline-block;
}

.notification-container {
  @apply fixed justify-center inset-x-0 bg-gradient-to-r from-cream to-emerald-200 rounded-lg p-5 md:w-52 w-3/4 mx-auto border-2 border-dark md:ml-10;
}

.notification {
  @apply text-xl text-dark animate-bounce;
}
</style>