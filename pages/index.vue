<template>
  <div>
    <app-section>
      <div :class="$style.teaser">
        <app-headline :class="$style.headline">
          Manage your favorite WebApps in one place
          and benefit from anti-stress features to stay focused
        </app-headline>
        <app-button
          to="/getpigment.app/download"
          large
          margin
          primary
        >
          Download Pigment for free
        </app-button>
        <app-button
          margin
          large
          @click="readMore"
        >
          Read more
        </app-button>
        <div :class="$style.info">
          <p>
            Pigment is an open source app for Mac and Windows.
          </p>
        </div>
      </div>
    </app-section>
    <app-section
      ref="slider"
      :class="$style.slider"
    >
      <client-only>
        <show-case />
      </client-only>
    </app-section>
  </div>
</template>

<script>
import ShowCase from '../components/ShowCase.vue';

export const attributes = {
  layout: 'Page',
};

export default {
  components: {
    ShowCase,
  },
  methods: {
    readMore() {
      this.$refs.slider.$el.scrollIntoView({ behavior: 'smooth' });
    },
  },
};
</script>

<style lang="postcss" module>
.teaser {
  @apply text-center;
}

.headline {
  @apply mb-8 mx-auto max-w-4xl;
}

.info {
  @apply mt-6 text-gray-600;
}

.slider {
  @apply text-green-100 bg-green-700;
}
</style>
