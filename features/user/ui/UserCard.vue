<template>
  <div class="flex flex-col gap-6">
    <div class="p-4 rounded-lg border border-gray-200 my-2">
      <div class="flex gap-4">
        <div
          class="flex-1 max-w-[85px] rounded-full bg-[var(--brand)] flex items-center justify-center text-[var(--primary)]"
        >
          Аватар
        </div>
        <div class="flex flex-col gap-1">
          <p class="text-lg font-semibold">Любитель программирования</p>
          <p class="text-gray-600">Frontend-разработчик</p>
          <p class="text-gray-600">Россия, г. Нижний Новгород</p>
        </div>
      </div>
    </div>
    <div class="p-4 rounded-lg border border-gray-200 my-2">
      <Title title="Персональная информация"></Title>
      <div class="grid grid-cols-2 max-w-[700px] gap-y-6">
        <div class="mt-2">
          <p class="text-gray-600 font-semibold mb-2">Имя</p>
          <p class="text-sm">Любитель</p>
        </div>
        <div>
          <p class="text-gray-600 font-semibold mb-2">Фамилия</p>
          <p class="text-sm">Программирования</p>
        </div>
        <div>
          <p class="text-gray-600 font-semibold mb-2">E-mail</p>
          <p class="text-sm">lubitel_programmirovania@email.email</p>
        </div>
        <div>
          <p class="text-gray-600 font-semibold mb-2">Телефон</p>
          <p class="text-sm">+1-234-567-890</p>
        </div>
        <div>
          <p class="text-gray-600 font-semibold mb-2">Должность</p>
          <p class="text-sm">Frontend-разработчик</p>
        </div>
      </div>
    </div>
    <div class="p-4 rounded-lg border border-gray-200 my-2">
      <Title title="Адрес"> </Title>
      <div class="grid grid-cols-2 max-w-[700px] gap-y-6">
        <div class="mt-2">
          <p class="text-gray-600 font-semibold mb-2">Страна</p>
          <p class="text-sm">Россия</p>
        </div>
        <div>
          <p class="text-gray-600 font-semibold mb-2">Город</p>
          <p class="text-sm">Гитхабск</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import Title from '~~/widgets/title/Title.vue'
</script>
