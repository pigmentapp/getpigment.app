<template>
  <div>
    <app-section :class="$style.download">
      <app-button
        to="https://github.com/pigmentapp/pigment/releases"
        external
        margin
        large
        primary
      >
        Download
      </app-button>
    </app-section>

    <app-section :class="$style.requirements">
      <app-responsive-embed
        :class="$style.screenshot"
        rounded-top
        shadow
      >
        <img
          src="@/assets/screenshots/pigment-screenshot-welcome-page.png"
          alt="Pigment"
        >
      </app-responsive-embed>
    </app-section>
  </div>
</template>

<script>
export const attributes = {
  layout: 'Page',
  title: 'Download',
};

export default {
  components: {
  },
};
</script>

<style lang="postcss" module>
.download {
  @apply text-center;
}

.requirements {
  @apply text-center bg-purple-800;
}

.screenshot {
  @apply mx-auto -mb-32;
  max-width: 920px;
}
</style>
