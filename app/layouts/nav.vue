<template>
  <Container>
    <NavBar class="mb-8" />
    <slot />
  </Container>
</template>

<script setup>
import Container from '~~/shared/Container/Container.vue'
import NavBar from '~~/widgets/navbar/ui/NavBar.vue'
</script>
