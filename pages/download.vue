<template>
  <div>
    <app-section :class="$style.download">
      <client-only>
        <download-buttons />
      </client-only>
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
import DownloadButtons from '../components/DownloadButtons.vue';

export const attributes = {
  layout: 'Page',
  title: 'Download',
};

export default {
  components: {
    DownloadButtons,
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
