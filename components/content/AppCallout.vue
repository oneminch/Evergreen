<script setup>
  // const content = "";
</script>

<template>
  <blockquote class="bg-green-200">
    <slot />
  </blockquote>
</template>

<style scoped>
  blockquote {
    border: 1px solid #495057;
    border-radius: 0.5rem;
    background-color: #343a40;
    padding: 1rem 1.5rem;
  }
</style>
