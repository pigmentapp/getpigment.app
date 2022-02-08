<template>
  <nav :class="$style.footer">
    <app-container :class="$style.container">
      Made with ❤️ by <a href="//herteleo.de">@herteleo</a>
      &middot;
      <a href="//legal.herteleo.de/imprint/getpigment.app">
        Impressum &amp; Kontakt
      </a>
      &middot;
      <a href="//legal.herteleo.de/data-protection/getpigment.app">
        Datenschutz
      </a>
    </app-container>
  </nav>
</template>

<script>
export default {
  computed: {
    year() {
      return new Date().getFullYear();
    },
  },
};
</script>

<style lang="postcss" module>
.footer {
  @apply flex-shrink-0 mt-auto text-gray-600;
}

.footer a:hover {
  @apply text-gray-400;
}

.container {
  @apply py-4 text-center;
}
</style>
