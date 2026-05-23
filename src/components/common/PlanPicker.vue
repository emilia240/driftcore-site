<template>
  <RadioGroup :model-value="modelValue" @update:model-value="$emit('update:modelValue', $event)">
    <RadioGroupLabel class="font-body text-sm font-medium text-navy">
      Choose a plan
      <span class="font-normal text-navy/50">
        (<router-link
          to="/pricing"
          class="text-slateBlue underline underline-offset-2 transition-colors hover:text-navy"
        >See pricing features</router-link>)
      </span>
    </RadioGroupLabel>

    <div class="mt-3 grid grid-cols-1 gap-2">
      <RadioGroupOption
        v-for="plan in plans"
        :key="plan.value"
        :value="plan.value"
        as="template"
        v-slot="{ checked, active }"
      >
        <div
          class="flex cursor-pointer items-center justify-between rounded-xl border-2
                 px-4 py-3.5 transition-all duration-200 focus:outline-none bg-slateBlue"
          :class="[
            checked ? 'border-brightBlue bg-paleBlue/40' : 'border-navy/10 hover:border-navy/30',
            active  ? 'ring-2 ring-brightBlue/30 ring-offset-1' : '',
          ]"
        >
          <div class="flex flex-col gap-0.5">
            <span class="font-heading text-h5 text-whiteBase">{{ plan.name }}</span>
            <span class="font-body text-sm text-paleBlue">{{ plan.price }}</span>
          </div>
          <svg
            v-if="checked"
            class="h-5 w-5 shrink-0 text-brightBlue"
            fill="currentColor"
            viewBox="0 0 20 20"
            aria-hidden="true"
          >
            <path
              fill-rule="evenodd"
              d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1
                 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
              clip-rule="evenodd"
            />
          </svg>
        </div>
      </RadioGroupOption>
    </div>
  </RadioGroup>
</template>

<script setup>
import {
  RadioGroup, RadioGroupLabel, RadioGroupOption,
} from '@headlessui/vue'

defineProps({
  modelValue: { type: String, required: true },
})

defineEmits(['update:modelValue'])

const plans = [
  { value: 'basic',      name: 'Basic',      price: '39 kr. / user / month' },
  { value: 'pro',        name: 'Pro',        price: '79 kr. / user / month' },
  { value: 'enterprise', name: 'Enterprise', price: 'Contact us'            },
]
</script>
