<template>
  <saber-link
    v-if="!external && to"
    :class="classList"
    :disabled="disabled"
    :to="to"
    v-on="$listeners"
  >
    <slot />
  </saber-link>
  <a
    v-else-if="external && to"
    :class="classList"
    :disabled="disabled"
    :href="to"
    v-on="$listeners"
  >
    <slot />
  </a>
  <button
    v-else
    :class="classList"
    :disabled="disabled"
    v-on="$listeners"
  >
    <slot />
  </button>
</template>

<script>
export default {
  props: {
    disabled: {
      type: Boolean,
      default: false,
    },
    external: {
      type: Boolean,
      default: false,
    },
    large: {
      type: Boolean,
      default: false,
    },
    margin: {
      type: Boolean,
      default: false,
    },
    primary: {
      type: Boolean,
      default: false,
    },
    to: {
      type: [Boolean, String],
      default: undefined,
    },
  },
  computed: {
    classList() {
      return {
        [this.$style.btn]: true,
        [this.$style.disabled]: this.disabled,
        [this.$style.large]: this.large,
        [this.$style.margin]: this.margin,
        [this.$style.default]: !this.primary,
        [this.$style.primary]: this.primary,
      };
    },
  },
};
</script>

<style lang="postcss" module>
.btn {
  @apply inline-flex py-2 px-6 font-medium no-underline rounded-full;
  transition-duration: 250ms;
  transition-property: color, background;
}

.disabled {
  @apply pointer-events-none opacity-50;
}

.large {
  @apply py-4 px-8 uppercase;
}

.margin {
  @apply m-2;
}

.default {
  @apply text-gray-400 bg-gray-700;
}

.default:hover {
  @apply text-gray-300 bg-gray-600;
}

.primary {
  @apply text-teal-100 bg-teal-600;
}

.primary:hover {
  @apply text-white bg-teal-400;
}
</style>
