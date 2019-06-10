<template>
  <div :class="$style.columns">
    <slot />
  </div>
</template>

<script>
export default {

};
</script>

<style lang="postcss" module>
.columns {
  @apply flex items-stretch -mx-2;
}

.columns > * {
  @apply flex-1 px-2;
}
</style>
