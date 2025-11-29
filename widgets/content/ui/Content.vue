<template>
  <div class="p-6 bg-white rounded-2xl shadow-md">
    <h1 class="text-xl font-semibold mb-2" v-if="title">{{ title }}</h1>
    <h2 class="text-sm text-gray-500 mb-4" v-if="subtitle">{{ subtitle }}</h2>
    <slot></slot>
  </div>
</template>

<script setup lang="ts">
interface Props {
  title?: string
  subtitle?: string
}

defineProps<Props>()
</script>
