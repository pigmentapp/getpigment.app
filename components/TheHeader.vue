<template>
  <nav :class="$style.header">
    <app-container :class="$style.container">
      <h1 :class="$style.brand">
        <saber-link to="/">
          Pigment
        </saber-link>
      </h1>
      <div :class="$style.nav">
        <nav-list :class="$style.list">
          <nav-list-item
            external
            to="//github.com/pigmentapp/pigment"
          >
            GitHub
          </nav-list-item>
        </nav-list>
        <app-button
          to="/getpigment.app/download"
          primary
        >
          Download
        </app-button>
      </div>
    </app-container>
  </nav>
</template>

<script>
import NavList from './NavList.vue';
import NavListItem from './NavListItem.vue';

export default {
  components: {
    NavList,
    NavListItem,
  },
};
</script>


<style lang="postcss" module>
.header {
  @apply flex-shrink-0 border-b border-gray-800;
}

.container {
  @apply flex items-center justify-between py-2;
}

.brand {
  @apply font-light leading-none text-xl;
}

.nav {
  @apply flex items-center;
}

.list {
  @apply mr-4 uppercase;
}
</style>
