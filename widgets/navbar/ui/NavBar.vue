<template>
  <header class="w-full">
    <nav
      class="flex items-center justify-between px-10 h-24 bg-[var(--primary)] rounded-full shadow-md"
    >
      <div class="text-3xl font-bold tracking-wider text-[var(--brand)]">
        CRM
      </div>
      <ul class="flex gap-8">
        <li v-for="icon in icons" :key="icon.id">
          <NuxtLink :to="icon.link" v-if="icon.link">
            <i
              :class="`pi ${icon.name}`"
              :style="icon.style"
              class="cursor-pointer"
            ></i>
          </NuxtLink>
          <i
            :class="`pi ${icon.name}`"
            :style="icon.style"
            class="cursor-pointer"
            v-else
          ></i>
        </li>
      </ul>
    </nav>
  </header>
</template>

<script setup lang="ts">
const icons = [
  {
    id: 1,
    name: 'pi-search',
    style: 'font-size: 1.3rem',
  },
  {
    id: 2,
    name: 'pi-bell',
    style: 'font-size: 1.3rem',
    link: '/alerts',
  },
  {
    id: 3,
    name: 'pi-user',
    style: 'font-size: 1.3rem',
    link: '/profile',
  },
]
</script>
