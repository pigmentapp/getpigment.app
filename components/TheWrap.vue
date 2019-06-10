<template>
  <div :class="$style.wrap">
    <the-header />
    <slot />
    <the-footer />
  </div>
</template>

<script>
import TheFooter from './TheFooter.vue';
import TheHeader from './TheHeader.vue';

export default {
  components: {
    TheFooter,
    TheHeader,
  },
};
</script>

<style lang="postcss" module>
body {
  @apply overflow-x-hidden overflow-y-scroll font-sans;
}

.wrap {
  @apply flex flex-col min-h-screen text-gray-200 bg-gray-900;
}
</style>
