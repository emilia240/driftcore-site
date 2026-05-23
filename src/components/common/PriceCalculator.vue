<template>
  <Transition name="slide-down">
    <div
      v-if="priceCalc"
      class="rounded-xl border border-navy/10 bg-whiteBase px-5 py-4"
    >
      <!-- Contact us state (enterprise plan or 250+ team) -->
      <template v-if="priceCalc.type === 'contact'">
        <p class="font-body text-xs uppercase tracking-wide text-slateBlue">
          Enterprise & large teams
        </p>
        <router-link
          to="/contact"
          class="mt-1 block font-heading text-h4 text-navy transition-colors hover:text-slateBlue"
        >
          Contact us for a quote →
        </router-link>
      </template>

      <!-- Calculated total -->
      <template v-else>
        <div class="flex items-end justify-between gap-4">
          <div>
            <p class="font-body text-xs uppercase tracking-wide text-slateBlue">
              Estimated monthly total
            </p>
            <p class="mt-0.5 font-heading text-h3 text-navy">
              {{ priceCalc.total }} kr.
            </p>
          </div>
          <p class="shrink-0 text-right font-body text-sm text-slateBlue">
            {{ priceCalc.count }} users<br />
            × {{ priceCalc.pricePerUser }} kr. / user
          </p>
        </div>
      </template>
    </div>
  </Transition>
</template>

<script setup>
defineProps({
  priceCalc: {
    type: Object,
    default: null,
  },
})
</script>

<style scoped>
.slide-down-enter-active { transition: all 0.2s ease-out; }
.slide-down-leave-active { transition: all 0.15s ease-in; }
.slide-down-enter-from,
.slide-down-leave-to    { opacity: 0; transform: translateY(-8px); }
</style>
