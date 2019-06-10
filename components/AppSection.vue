<template>
  <section
    :class="{
      [$style.section]: true,
      [$style.separate]: separate,
    }"
  >
    <app-container v-bind="$attrs">
      <slot />
    </app-container>
  </section>
</template>

<script>
export default {
  props: {
    separate: {
      type: Boolean,
      default: false,
    },
  },
};
</script>

<style lang="postcss" module>
.section {
  @apply py-32;
}

.separate {
  @apply border-t border-gray-800;
}
</style>
