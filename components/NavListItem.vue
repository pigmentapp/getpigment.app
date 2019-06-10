<template>
  <li>
    <saber-link
      v-if="!external"
      :class="$style.link"
      :active-class="$style.active"
      :exact-active-class="$style.active"
      :to="to"
    >
      <div :class="$style.label">
        <slot />
      </div>
    </saber-link>
    <a
      v-else
      :class="$style.link"
      :href="to"
    >
      <div :class="$style.label">
        <slot />
      </div>
    </a>
  </li>
</template>

<script>
export default {
  props: {
    external: {
      type: Boolean,
      default: false,
    },
    to: {
      type: String,
      required: true,
    },
  },
};
</script>

<style lang="postcss" module>
.link {
  @apply block py-2 px-4 font-medium text-gray-600;
  transition-duration: 250ms;
  transition-property: color;
}

.link:hover,
.active {
  @apply  text-gray-400;
}

.label {
  @apply border-b-2 border-transparent;
  transition-duration: 250ms;
  transition-property: border;
}

.active > .label {
  @apply border-gray-700;
}
</style>
