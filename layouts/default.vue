<template>
  <div>
    <TheHeader @sidenavToggle="toggleSidenav" />
    <TheSidenav
      :show="displaySidenav"
      @close="displaySidenav = false"
    />
    <nuxt />
  </div>
</template>

<script>
import TheHeader from '~/components/Navigation/TheHeader';
import TheSidenav from '~/components/Navigation/TheSidenav';

export default {
  components: { TheHeader, TheSidenav },
  data() {
    return {
      displaySidenav: false,
    };
  },
  methods: {
    toggleSidenav() {
      this.displaySidenav = !this.displaySidenav;
    },
  },
};
</script>

<style lang="stylus">
html
  font-family: 'Open Sans', sans-serif

body
  margin: 0
</style>
