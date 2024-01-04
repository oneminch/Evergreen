<script setup lang="ts">
  const colorMode = useColorMode();
  colorMode.preference = "dark";
</script>

<template>
  <NuxtLoadingIndicator color="#fcc419" />
  <AppLayout>
    <NuxtPage />
  </AppLayout>
</template>
