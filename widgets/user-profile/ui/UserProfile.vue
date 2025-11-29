<template>
  <Container>
    <Content title="Профиль" subtitle="Ваш профиль">
      <UserCard />
    </Content>
  </Container>
</template>

<script setup>
import Container from '~~/shared/Container/Container.vue'
import Content from '~~/widgets/content/ui/Content.vue'
import UserCard from '~~/features/user/ui/UserCard.vue'
</script>
