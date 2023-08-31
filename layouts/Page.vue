<template>
  <div>
    <div :class="$style.alert">
      <app-container>
        The project is no longer maintained.
      </app-container>
    </div>
    <slot />
  </div>
</template>


<script>
export default {
  props: {
    page: {
      type: Object,
      required: true,
    },
  },
  head() {
    const pageTitle = this.page.attributes.title;
    return {
      title: pageTitle
        ? `${pageTitle} · ${this.$siteConfig.title}`
        : this.$siteConfig.title,
    };
  },
};
</script>

<style lang="postcss" module>
.alert {
  @apply py-2 bg-yellow-400 text-yellow-900;
}
</style>
