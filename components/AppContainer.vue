<template>
  <div :class="['container', $style.container]">
    <slot />
  </div>
</template>

<style lang="postcss" module>
.container {
  @apply px-2 mx-auto;
}
</style>
