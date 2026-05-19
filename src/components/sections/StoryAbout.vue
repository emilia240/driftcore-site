<template>
  <section>
    <div class="mx-auto max-w-4xl px-6 py-14 lg:py-20">
      <div
        v-motion
        :initial="{ opacity: 0, y: 24 }"
        :visible-once="{ opacity: 1, y: 0, transition: { duration: 600 } }"
        class="space-y-6 font-body text-body text-navy"
      >
        <p>
          DriftCore was born from a frustration with the modern workplace. Most tools have become
          bloated mirrors of management anxiety, focused on surveillance rather than productivity.
          We chose a different path: <strong>Aggressive Clarity.</strong>
        </p>
        <p>
          Other time tracking apps turned into surveillance dashboards, screenshot machines, and
          bloated platforms with five tabs you'll never open. We built this app for the teams who
          just need a clean way to log hours, group them by project and customer, and get paid.
          No keystroke logging. No webcam screenshots. No "productivity scores."
        </p>
      </div>
    </div>
  </section>
</template>

<script setup>
</script>

<style scoped>
</style>