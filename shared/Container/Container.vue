<template>
  <div :class="containerClass">
    <slot />
  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue'

const props = defineProps({
  size: {
    type: String,
    default: 'xl',
    validator: (value: string) => ['sm', 'md', 'lg', 'xl'].includes(value),
  },
})

const sizeMap = {
  sm: 'max-w-2xl',
  md: 'max-w-4xl',
  lg: 'max-w-5xl',
  xl: 'max-w-[1880px]',
}
const containerClass = computed(
  () =>
    `mx-auto my-8 px-4 sm:px-6 lg:px-8 ${
      sizeMap[props.size as keyof typeof sizeMap]
    }`
)
</script>
