<template>
  <section class="mx-auto max-w-2xl px-6 pt-10 lg:pt-14 pb-64 lg:pb-72">
    <h2 class="font-heading text-h3 text-navy text-center">Estimate your cost</h2>
    <p class="mt-2 font-body text-body text-slateBlue text-center">
      Pick a plan and team size to see a monthly estimate.
    </p>

    <div class="mt-8 flex flex-col gap-6">
      <PlanPicker v-model="plan" />
      <TeamSizeSelect
        v-model="teamSize"
        v-model:custom-value="customTeamSize"
        :show-error="false"
      />
      <PriceCalculator :price-calc="priceCalc" />
    </div>
  </section>
</template>

<script setup>
import { ref, computed, watch } from 'vue'
import PlanPicker      from '../common/PlanPicker.vue'
import TeamSizeSelect  from '../common/TeamSizeSelect.vue'
import PriceCalculator from '../common/PriceCalculator.vue'

const USER_COUNT_MAP = {
  '1-5':    5,
  '6-15':   15,
  '16-30':  30,
  '31-50':  50,
  '51-100': 100,
  '101-250':250,
}
const PLAN_PRICE = { basic: 39, pro: 79 }

const plan           = ref('basic')
const teamSize       = ref('')
const customTeamSize = ref('')

watch(teamSize, (val) => {
  if (val !== 'custom') customTeamSize.value = ''
})

function getUserCount() {
  if (!teamSize.value || teamSize.value === '250+') return null
  if (teamSize.value === 'custom') {
    const n = parseInt(customTeamSize.value, 10)
    return n > 0 ? n : null
  }
  return USER_COUNT_MAP[teamSize.value] ?? null
}

const priceCalc = computed(() => {
  if (!teamSize.value) return null
  if (plan.value === 'enterprise' || teamSize.value === '250+') return { type: 'contact' }
  const count = getUserCount()
  if (!count) return null
  const pricePerUser = PLAN_PRICE[plan.value]
  return {
    type: 'calculated',
    total: (count * pricePerUser).toLocaleString('da-DK'),
    count,
    pricePerUser,
  }
})
</script>
