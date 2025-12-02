<template>
  <button :class="buttonClass">
    <slot />
  </button>
</template>

<script setup lang="ts">
import { computed } from 'vue'

const props = defineProps({
  variant: {
    type: String,
    default: 'primary',
    validator: (value: string) =>
      ['primary', 'secondary', 'success', 'destructive'].includes(value),
  },
})

const variantMap = {
  primary: 'bg-[var(--brand)] hover:bg-[var(--brand)]/80',
  secondary: 'bg-[#288ceb] hover:bg-[#288ceb]/80',
  success: 'bg-[#11bf3c] hover:bg-[#08bf3c]/80',
  destructive: 'bg-[#de0b0b] hover:bg-[#de0b0b]/80',
}

const buttonClass = computed(
  () =>
    `w-fit h-10 rounded-lg text-white px-3 py-1 ${
      variantMap[props.variant as keyof typeof variantMap]
    }`
)
</script>
