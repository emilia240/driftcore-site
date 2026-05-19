<template>
  <!-- Section wrapper: cream background with navy text -->
  <section class=" text-navy">
    <!-- Main container: keeps the section centered and gives it hero-like height on desktop -->
    <div class="mx-auto max-w-7xl px-6 py-14 lg:min-h-[calc(100vh-10rem)] lg:py-16">
      <!-- Heading block: centered title + subtitle -->
      <div class="mx-auto max-w-4xl text-center">
        <h2
        v-motion
        :initial="{ opacity: 0, y: 24 }"
        :visible-once="{ opacity: 1, y: 0, transition: { duration: 600 } }"
        class="font-heading text-h2 leading-tight"
        >
          Everything you need.<br />
          Nothing you don't.
        </h2>
        <p
        v-motion
        :initial="{ opacity: 0, y: 18 }"
        :visible-once="{ opacity: 1, y: 0, transition: { delay: 150, duration: 600 } }"
        class="mt-4 font-body text-body text-navy"
        >
          Five core tools, built to work together.
        </p>
      </div>

      <!-- Main feature area -->
      <div class="mt-10 lg:mt-14">
        <!-- Desktop layout:
             Left side = selectable tool list
             Right side = large icon preview -->
        <div class="hidden gap-8 lg:grid lg:grid-cols-2 lg:items-stretch">
          <!-- Left panel: five selectable tool cards -->
          <div class="space-y-4">
            <button
            v-for="(tool, index) in tools"
            :key="tool.title"
            v-motion
            :initial="{ opacity: 0, x: -24 }"
            :visible-once="{ opacity: 1, x: 0, transition: { delay: index * 100, duration: 600 } }"
            type="button"
            class="feature-tab relative flex w-full items-start overflow-hidden rounded-xl border border-transparent bg-cream px-10 py-6 text-left transition-all duration-300"
            :class="selectedTool === index
                ? 'border-cyan shadow-[0_0_0_1px_rgba(84,201,235,0.45),0_0_18px_rgba(84,201,235,0.22)]'
                : 'text-navy hover:bg-blue-light hover:shadow-[0_0_0_1px_rgba(133,147,201,0.25)]'"
            :aria-pressed="selectedTool === index"
            @click="selectTool(index)"
            >
            <div class="min-w-0">
                <h3 class="font-heading text-h3 leading-tight text-navy">
                {{ tool.title }}
                </h3>
                <p class="mt-2 font-body text-body leading-hero-copy text-navy">
                {{ tool.description }}
                </p>
            </div>
            </button>
          </div>

          <!-- Right panel: large icon preview that changes based on selected tool -->
            <div class="flex items-center justify-center">
                <div
                    v-motion
                    :initial="{ opacity: 0, y: 24 }"
                    :visible-once="{ opacity: 1, y: 0, transition: { duration: 700 } }"
                    class="card-drift flex items-center justify-center rounded-xl bg-navy w-[90%] p-20 shadow-xl ring-1 ring-cyan"
                >
                    <img
                    :src="activeTool.icon"
                    :alt="activeTool.title"
                    class="h-auto w-[95%]"
                    />
                </div>
            </div>
        </div>

        <!-- Tablet + mobile layout:
             Each tool becomes its own card with text and icon together -->
        <div class="grid gap-4 lg:hidden">
          <article
            v-for="tool in tools"
            :key="tool.title"
            class="overflow-hidden rounded-xl border border-navy bg-cream"
          >
            <div class="grid grid-cols-1 md:grid-cols-[4fr_1fr]">
              <!-- Text block -->
              <div class="border-b border-navy md:border-b-0 px-5 py-5">
                <h3 class="font-heading text-h3 leading-tight text-navy">
                  {{ tool.title }}
                </h3>
                <p class="mt-2 font-body text-body leading-hero-copy text-navy">
                  {{ tool.description }}
                </p>
              </div>

              <!-- Icon block -->
              <div class="flex items-center justify-center bg-navy px-5 py-5">
                <img
                  :src="tool.icon"
                  :alt="tool.title"
                  class="h-24 w-24 object-contain md:h-20 md:w-20"
                />
              </div>
            </div>
          </article>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { computed, ref } from 'vue'
import HeroHours from '../../assets/graphics/hero-hours.svg'
import HeroProject from '../../assets/graphics/hero-project.svg'
import HeroReport from '../../assets/graphics/hero-report.svg'
import HeroCustomer from '../../assets/graphics/hero-customer.svg'
import HeroApprovals from '../../assets/graphics/hero-approvals.svg'

/* Tool data: title, description, and icon used by the desktop preview and mobile cards */
const tools = [
  {
    title: 'Time tracking',
    description:
      'Track time quickly, keep sessions clean, and turn every minute into something usable without extra friction.',
    icon: HeroHours,
  },
  {
    title: 'Projects',
    description:
      'Organize work by project, keep the team aligned, and move between active jobs without losing context.',
    icon: HeroProject,
  },
  {
    title: 'Reporting & invoicing',
    description:
      'Convert tracked time into professional invoices instantly. Export billable hours straight into invoices. Filter by customer, project, or person. Done in minutes, not hours.',
    icon: HeroReport,
  },
  {
    title: 'Customers',
    description:
      'Keep every client, contact, and billing relationship in one place so the work stays easy to manage.',
    icon: HeroCustomer,
  },
  {
    title: 'Time approvals',
    description:
      'Review, approve, and lock time entries with a clear workflow that keeps everything moving.',
    icon: HeroApprovals,
  },
]

/* Tracks which tool is active on desktop */
const selectedTool = ref(0)

/* Returns the currently active tool so the large preview can update */
const activeTool = computed(() => tools[selectedTool.value])

/* Updates the active tool when a button is clicked */
function selectTool(index) {
  selectedTool.value = index
}
</script>

<style scoped>
/* Cyan border glow + float, same as HeroHome card-drift */
.card-drift {
  animation: border-glow 3s ease-in-out infinite;
}

@keyframes border-glow {
  0%, 100% {
    box-shadow: 0 0 0 rgba(84, 201, 235, 0), 0 18px 38px rgba(33, 51, 69, 0.14);
  }
  50% {
    box-shadow: 0 0 12px rgba(84, 201, 235, 0.6), 0 18px 38px rgba(33, 51, 69, 0.14);
  }
}

@media (min-width: 1024px) {
  .card-drift {
    animation: icon-float 7s ease-in-out infinite, border-glow 3s ease-in-out infinite;
  }
}

@keyframes icon-float {
  0%, 100% { transform: translateY(0); }
  50% { transform: translateY(-10px); }
}

@media (prefers-reduced-motion: reduce) {
  .card-drift { animation: none !important; }
}
</style>