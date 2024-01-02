<template>
  <u>
    <slot />
  </u>
</template>

<style scoped>
  u {
    color: #343a40;
    /* background-image: linear-gradient(
      to right,
      #fcc31980,
      #fcc419ff,
      #fcc31980
    ); */
    text-decoration: none;
    z-index: -1;
    position: relative;
    padding: 0 0.5rem;
    margin: 0 0.25rem;
  }

  u::before {
    border-radius: 0.15rem;
    content: "";
    z-index: -2;
    display: inline-block;
    position: absolute;
    inset: -3px 0;
    background-color: rgba(252, 195, 25, 0.75);
    transform: skewX(-15deg);
  }
</style>
