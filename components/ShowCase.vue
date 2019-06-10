<template>
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
</template>

<script>
import FadeShow from './FadeShow.vue';

export default {
  components: {
    FadeShow,
  },
};
</script>

<style lang="postcss" module>

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
