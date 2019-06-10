<template>
  <div
    @mouseenter="stop"
    @mouseleave="start"
  >
    <transition
      appear
      name="fade"
      mode="out-in"
      :enter-class="$style.enter"
      :enter-active-class="$style.enterActive"
      :leave-active-class="$style.leaveActive"
      :leave-to-class="$style.leaveTo"
    >
      <template v-for="(slot, name) in $slots">
        <div
          v-if="name === activeElement"
          :key="name"
        >
          <slot :name="name" />
        </div>
      </template>
    </transition>
    <div :class="$style.handlers">
      <button
        v-for="item in elements"
        :key="item"
        :class="{
          [$style.handler]: true,
          [$style.handlerActive]: item === activeElement
        }"
        @click="goto(item)"
      />
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      activeElement: undefined,
      elements: [],
      interval: undefined,
    };
  },
  created() {
    this.elements = Object.keys(this.$slots);
    [this.activeElement] = this.elements;

    this.start();
  },
  beforeDestroy() {
    this.stop();
  },
  methods: {
    goto(item) {
      this.activeElement = item;
    },
    start() {
      this.interval = setTimeout(() => {
        const activeIndex = this.elements.findIndex(e => e === this.activeElement);
        let nextItem = this.elements[activeIndex + 1];
        nextItem = nextItem || this.elements[0];

        this.activeElement = nextItem;
        this.start();
      }, 8000);
    },
    stop() {
      clearTimeout(this.interval);
    },
  },
};
</script>

<style lang="postcss" module>
.enterActive,
.leaveActive {
  transition-duration: 750ms;
  transition-timing-function: ease;
  transition-property: opacity;
}

.enter,
.leaveTo {
  opacity: 0;
}

.enterActive > div > div,
.leaveActive > div > div {
  transition-duration: 750ms;
  transition-timing-function: ease;
  transition-property: transform;
}

.enter > div > div:first-child,
.leaveTo > div > div:first-child {
  transform: translateX(theme('margin.-2'));
}

.enter > div > div:last-child:not(:first-child),
.leaveTo > div > div:last-child:not(:first-child) {
  transform: translateX(theme('margin.2'));
}

.handlers {
  @apply flex justify-center h-0 text-center;
}

.handler {
  @apply mx-1 mt-10 w-6 h-2 opacity-25 bg-white rounded;
  transition-duration: 750ms;
  transition-timing-function: ease;
  transition-property: opacity;
}

.handlerActive {
  @apply opacity-50;
}
</style>
