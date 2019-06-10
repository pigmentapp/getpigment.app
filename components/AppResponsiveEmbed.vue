<template>
  <div
    :class="{
      [$style.embed]: true,
      [$style.rounded]: rounded,
      [$style.roundedTop]: roundedTop,
      [$style.roundedBottom]: roundedBottom,
      [$style.shadow]: shadow,
    }"
  >
    <slot />
  </div>
</template>

<script>
export default {
  props: {
    rounded: {
      type: Boolean,
      default: false,
    },
    roundedTop: {
      type: Boolean,
      default: false,
    },
    roundedBottom: {
      type: Boolean,
      default: false,
    },
    shadow: {
      type: Boolean,
      default: false,
    },
  },
};
</script>

<style lang="postcss" module>
.embed {
  @apply relative overflow-hidden;
}

.embed::before {
  @apply block;
  padding-top: calc(100% / 16 * 9);
  content: "";
}

.embed > img,
.embed > video {
  @apply absolute top-0 left-0 w-full;
}

.rounded {
  @apply rounded-t rounded-b;
}

.roundedTop {
  @apply rounded-t;
}

.roundedBottom {
  @apply rounded-b;
}

.shadow {
  @apply shadow-xl;
}
</style>
