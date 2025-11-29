<template>
  <p class="text-lg font-semibold">{{ title }}</p>
</template>
<script setup lang="ts">
interface Props {
  title?: string
}
defineProps<Props>()
</script>
