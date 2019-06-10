<template>
  <div>
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
