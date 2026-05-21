<template>
  <article
  class="flex flex-col w-full sm:w-80 items-center rounded-xl px-8 py-10 shadow-md md:items-start"
  :class="highlighted ? 'bg-slateBlue' : 'bg-whiteBase border border-navy/10'"
    >
    <h2
      class="font-heading text-h3 leading-tight"
      :class="highlighted ? 'text-whiteBase' : 'text-navy'"
    >
      {{ planName }}
    </h2>

    <div class="mt-4 flex items-baseline gap-2">
      <h3
        class="font-heading text-h2 leading-tight"
        :class="highlighted ? 'text-whiteBase' : 'text-navy'"
      >
        {{ price }}
      </h3>
      <span
        v-if="priceNote"
        class="font-body text-body"
        :class="highlighted ? 'text-whiteBase' : 'text-slateBlue'"
      >
        {{ priceNote }}
      </span>
    </div>

    <ul class="mt-8 flex flex-col gap-3">
      <li
        v-for="feature in features"
        :key="feature"
        class="flex items-center gap-3 font-body text-body"
        :class="highlighted ? 'text-whiteBase' : 'text-navy'"
      >
        <svg class="h-4 w-4 shrink-0 text-brightBlue" fill="currentColor" viewBox="0 0 20 20" aria-hidden="true">
          <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd" />
        </svg>
        {{ feature }}
      </li>
    </ul>

    <div class="mt-auto pt-10 w-full">
      <router-link
        :to="ctaLabel === 'Contact us' ? '/contact' : '/signup'"
        class="block w-full rounded-xl px-10 py-4 text-center font-body text-base shadow-2xl transition-all duration-300 hover:scale-105"
        :class="highlighted
          ? 'bg-whiteBase text-navy hover:bg-brightBlue hover:text-navy'
          : 'bg-navy text-whiteBase hover:bg-brightBlue hover:text-navy'"
      >
        {{ ctaLabel }}
      </router-link>
    </div>
  </article>
</template>

<script setup>
defineProps({
  planName:    { type: String,  required: true },
  price:       { type: String,  required: true },
  priceNote:   { type: String,  default: '/ user / month' },
  features:    { type: Array,   required: true },
  ctaLabel:    { type: String,  default: 'Start free trial' },
  highlighted: { type: Boolean, default: false },
})
</script>

<style scoped>
</style>