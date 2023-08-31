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
            src="@/assets/screenshots/pigment-screenshot-welcome-page.png"
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
            src="@/assets/screenshots/pigment-screenshot-wunderlist.png"
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
            src="@/assets/screenshots/pigment-screenshot-active-dimmer.png"
            alt="Discord"
          >
        </app-responsive-embed>
      </div>
    </app-content-columns>
    <app-content-columns slot="4">
      <div :class="$style.sliderContent">
        <app-headline tag="h2">
          Customizable interface &amp; behaviour
        </app-headline>
        <p>
          Pigment has even more settings to customize the layout
          and behaviour of the app. Just give it a try and
          download Pigment now for free. It's open source too.
        </p>
      </div>
      <div>
        <app-responsive-embed
          rounded
          shadow
        >
          <video
            src="/getpigment.app/assets/screenshots/pigment-screenshot-layout-variants.mp4"
            autoplay
            controls
            loop
          />
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
