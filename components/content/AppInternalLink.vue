<template>
  <nuxt-link
    to="/"
    class="inline-block font-medium rounded-md text-yellow-500 py-0.5"
  >
    <span class="mr-1 opacity-50">[[</span>
    <slot />
    <span class="ml-1 opacity-50">]]</span>
  </nuxt-link>
</template>
