<template>
  <div>
    <div class="py-2 bg-yellow-400 text-yellow-900">
      <div class="container mx-auto">
        The project is no longer maintained.
      </div>
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
