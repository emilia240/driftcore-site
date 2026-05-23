<template>
  <Listbox
    :model-value="modelValue"
    as="div"
    class="flex flex-col gap-1.5"
    @update:model-value="$emit('update:modelValue', $event)"
  >
    <ListboxLabel class="font-body text-sm font-medium text-navy">Team size</ListboxLabel>
    <div class="relative">
      <ListboxButton
        class="w-full rounded-xl border bg-whiteBase px-4 py-3 text-left font-body
               text-body focus:outline-none focus:ring-2 focus:ring-brightBlue/20 transition-colors"
        :class="[
          showError ? 'border-red-400 focus:border-red-400' : 'border-navy/20 focus:border-brightBlue',
          isPlaceholder ? 'text-navy/40' : 'text-navy',
        ]"
      >
        <template v-if="!modelValue">Select your team size</template>
        <template v-else-if="modelValue === 'custom'">
          {{ customValue ? `${customValue} people` : 'Enter exact number' }}
        </template>
        <template v-else>{{ teamSizes.find(s => s.value === modelValue)?.label }}</template>
        <span class="pointer-events-none absolute inset-y-0 right-4 flex items-center text-navy/50" aria-hidden="true">
          <svg class="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
            <path stroke-linecap="round" stroke-linejoin="round" d="M19 9l-7 7-7-7" />
          </svg>
        </span>
      </ListboxButton>

      <Transition
        enter-active-class="transition duration-100 ease-out"
        enter-from-class="opacity-0 scale-95"
        enter-to-class="opacity-100 scale-100"
        leave-active-class="transition duration-75 ease-in"
        leave-from-class="opacity-100 scale-100"
        leave-to-class="opacity-0 scale-95"
      >
        <ListboxOptions class="absolute z-10 mt-1 w-full overflow-hidden rounded-xl border border-navy/10 bg-whiteBase py-1 shadow-lg focus:outline-none">
          <ListboxOption
            v-for="size in teamSizes"
            :key="size.value"
            :value="size.value"
            as="template"
            v-slot="{ active, selected }"
          >
            <li
              class="flex cursor-pointer items-center gap-2 px-4 py-3 font-body text-body text-navy transition-colors"
              :class="[
                active ? 'bg-paleBlue/40' : '',
                size.value === 'custom' ? 'border-t border-navy/10 italic' : '',
              ]"
            >
              <span :class="selected ? 'font-medium' : ''">{{ size.label }}</span>
              <svg v-if="selected" class="ml-auto h-4 w-4 shrink-0 text-brightBlue" fill="currentColor" viewBox="0 0 20 20" aria-hidden="true">
                <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd" />
              </svg>
            </li>
          </ListboxOption>
        </ListboxOptions>
      </Transition>
    </div>

    <p v-if="showError" role="alert" class="font-body text-sm text-red-500">
      Please select a team size to continue.
    </p>

    <Transition name="slide-down">
      <div v-if="modelValue === 'custom'" class="flex flex-col gap-1.5">
        <label for="custom-team-size" class="font-body text-sm text-navy/70">Enter your exact team size</label>
        <input
          id="custom-team-size"
          :value="customValue"
          type="number"
          min="1"
          max="99999"
          placeholder="e.g. 75"
          class="w-full rounded-xl border bg-whiteBase px-4 py-3 font-body text-body
                 text-navy placeholder:text-navy/40 focus:outline-none focus:ring-2
                 focus:ring-brightBlue/20 transition-colors"
          :class="customError ? 'border-red-400 focus:border-red-400' : 'border-navy/20 focus:border-brightBlue'"
          @input="$emit('update:customValue', $event.target.value)"
        />
        <p v-if="customError" role="alert" class="font-body text-sm text-red-500">{{ customError }}</p>
      </div>
    </Transition>
  </Listbox>
</template>

<script setup>
import { computed } from 'vue'
import {
  Listbox, ListboxLabel, ListboxButton, ListboxOptions, ListboxOption,
} from '@headlessui/vue'

const props = defineProps({
  modelValue:  { type: String,  default: ''    },
  customValue: { type: String,  default: ''    },
  showError:   { type: Boolean, default: false },
  customError: { type: String,  default: ''    },
})

defineEmits(['update:modelValue', 'update:customValue'])

const teamSizes = [
  { value: '1-5',     label: '1–5 people'        },
  { value: '6-15',    label: '6–15 people'        },
  { value: '16-30',   label: '16–30 people'       },
  { value: '31-50',   label: '31–50 people'       },
  { value: '51-100',  label: '51–100 people'      },
  { value: '101-250', label: '101–250 people'     },
  { value: '250+',    label: '250+ people'        },
  { value: 'custom',  label: 'Enter exact number' },
]

const isPlaceholder = computed(() =>
  !props.modelValue || (props.modelValue === 'custom' && !props.customValue)
)
</script>

<style scoped>
.slide-down-enter-active { transition: all 0.2s ease-out; }
.slide-down-leave-active { transition: all 0.15s ease-in; }
.slide-down-enter-from,
.slide-down-leave-to    { opacity: 0; transform: translateY(-8px); }
</style>
