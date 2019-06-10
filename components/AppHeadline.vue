<template>
  <component
    :is="tag"
    :class="{
      [$style.headline]: true,
      [$style[tag]]: true,
      [$style.center]: center,
      [$style.margin]: margin,
    }"
  >
    <slot />
  </component>
</template>

<script>
export default {
  props: {
    tag: {
      type: String,
      default: 'h1',
    },
    center: {
      type: Boolean,
      default: false,
    },
    margin: {
      type: Boolean,
      default: false,
    },
  },
};
</script>

<style lang="postcss" module>
.headline {
  @apply font-light text-4xl;
}

.h1 {
  @apply font-light text-4xl;
}

.h2 {
  @apply font-light text-3xl;
}

.h3 {
  @apply font-light text-2xl;
}

.center {
  @apply text-center;
}

.margin {
  @apply mb-8;
}
</style>
