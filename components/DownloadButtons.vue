<template>
  <div>
    <app-headline margin>
      Download Pigment
      {{ latestRelease.tag_name || '0.0.0' }}
    </app-headline>
    <app-button
      :to="macDownload"
      :disabled="!macDownload"
      external
      margin
      large
      :primary="isMac"
    >
      Download for Mac
    </app-button>
    <app-button
      :to="winDownload"
      :disabled="!winDownload"
      external
      margin
      large
      :primary="isWin"
    >
      Download for Win
    </app-button>
    <div
      v-if="!latestRelease.assets"
      :class="$style.loading"
    >
      Loading release data...
    </div>
  </div>
</template>

<script>

export default {
  data() {
    return {
      latestRelease: {},
    };
  },
  computed: {
    isMac() {
      return navigator.platform.indexOf('Mac') > -1;
    },
    isWin() {
      return navigator.platform.indexOf('Win') > -1;
    },
    macDownload() {
      if (!this.latestRelease.assets) return false;

      const asset = this.latestRelease.assets
        .find(a => a.browser_download_url.indexOf('.dmg') > -1);

      if (!asset) return false;

      return asset.browser_download_url;
    },
    winDownload() {
      if (!this.latestRelease.assets) return false;

      const asset = this.latestRelease.assets
        .find(a => a.browser_download_url.indexOf('.exe') > -1);

      if (!asset) return false;

      return asset.browser_download_url;
    },
  },
  created() {
    this.getLatestRelease();
  },
  methods: {
    async getLatestRelease() {
      const response = await fetch('//api.github.com/repos/pigmentapp/pigment/releases/latest');
      const release = await response.json();

      this.latestRelease = release;
    },
  },
};
</script>

<style lang="postcss" module>
.loading {
  @apply h-0;
}
</style>
