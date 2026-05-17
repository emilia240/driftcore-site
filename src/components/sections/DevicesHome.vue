<template>
  <section class="bg-blue-light text-navy">
    <div class="mx-auto max-w-7xl px-6 py-14 lg:py-20">

      <!-- Heading block -->
      <div class="mx-auto max-w-4xl text-center">
        <h2
          v-motion
          :initial="{ opacity: 0, y: 24 }"
          :visible-once="{ opacity: 1, y: 0, transition: { duration: 600 } }"
          class="font-heading text-h2 leading-tight text-navy"
        >
          Works on any device
        </h2>
        <p
          v-motion
          :initial="{ opacity: 0, y: 18 }"
          :visible-once="{ opacity: 1, y: 0, transition: { delay: 150, duration: 600 } }"
          class="mt-4 font-body text-body text-navy"
        >
          Web-based and fully responsive — open it from your desk, your phone, or anywhere in between.
        </p>
      </div>

      <!-- Device icons -->
      <div class="mt-6 mx-auto grid w-fit grid-cols-2 gap-x-12 gap-y-8 lg:mt-12 lg:w-[80%] lg:grid-cols-4 lg:gap-6">
        <div
          v-for="(device, index) in devices"
          :key="device.label"
          v-motion
          :initial="{ opacity: 0, y: 24 }"
          :visible-once="{ opacity: 1, y: 0, transition: { delay: index * 120, duration: 600 } }"
          class="flex flex-col items-center gap-4"
        >
          <img :src="device.icon" :alt="device.label" class="h-14 w-auto lg:h-20" />
          <span class="font-body text-body text-navy">{{ device.label }}</span>
        </div>
      </div>

    </div>
  </section>
</template>

<script setup>
import IconMobile from '../../assets/graphics/mobile.svg'
import IconTablet from '../../assets/graphics/tablet.svg'
import IconLaptop from '../../assets/graphics/laptop.svg'
import IconDesktop from '../../assets/graphics/desktop.svg'

const devices = [
  { label: 'Mobile',  icon: IconMobile  },
  { label: 'Tablet',  icon: IconTablet  },
  { label: 'Laptop',  icon: IconLaptop  },
  { label: 'Desktop', icon: IconDesktop },
]
</script>

<style scoped>
</style>