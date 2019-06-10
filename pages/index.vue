<template>
  <div>
    <app-section>
      <div :class="$style.teaser">
        <app-headline :class="$style.headline">
          Manage your favorite WebApps in one place
          and benefit from anti-stress features to stay focused
        </app-headline>
        <app-button
          to="/download"
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
        <fade-show>
          <app-content-columns slot="1">
            <div :class="$style.sliderContent">
              <app-headline tag="h2">
                All your WebApps in one place
              </app-headline>
              <p>
                Pigment can be your central communication center.
              </p>
              <p>
                Add your favorite WebApps to Pigment
                to clean up your browser tabs and dock/taskbar.
              </p>
            </div>
            <div>
              <app-responsive-embed
                rounded
                shadow
              >
                <img
                  src="@/assets/screenshots/960x540.png"
                  alt="Discord"
                >
              </app-responsive-embed>
            </div>
          </app-content-columns>
          <app-content-columns slot="2">
            <div :class="$style.sliderContent">
              <app-headline tag="h2">
                Reduce stress and stay focused
              </app-headline>
              <p>
                With scheduled notifications.
                Pigment can collect all incoming notifications
                and send only one collected notification at your schedule.
              </p>
            </div>
            <div>
              <app-responsive-embed
                rounded
                shadow
              >
                <img
                  src="@/assets/screenshots/960x540.png"
                  alt="Discord"
                >
              </app-responsive-embed>
            </div>
          </app-content-columns>
          <app-content-columns slot="3">
            <div :class="$style.sliderContent">
              <app-headline tag="h2">
                Improved privacy and distraction free
              </app-headline>
              <p>
                After leaving the app window, Pigment can dim its contents.
                So you stay focused and nobody can catch an unwanted
                glimpse of your activities.
              </p>
            </div>
            <div>
              <app-responsive-embed
                rounded
                shadow
              >
                <img
                  src="@/assets/screenshots/960x540.png"
                  alt="Discord"
                >
              </app-responsive-embed>
            </div>
          </app-content-columns>
        </fade-show>
      </client-only>
    </app-section>
  </div>
</template>

<script>
import FadeShow from '../components/FadeShow.vue';

export const attributes = {
  layout: 'page',
};

export default {
  components: {
    FadeShow,
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

.sliderContent {
  @apply flex flex-col justify-center;
}

.sliderContent h2 {
  @apply mb-2;
}

.sliderContent p {
  @apply text-green-200 text-2xl;
}
</style>
