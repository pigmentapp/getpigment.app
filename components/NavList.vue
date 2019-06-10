<template>
  <ul :class="$style.list">
    <slot />
  </ul>
</template>

<style lang="postcss" module>
.list {
  @apply flex;
}
</style>
