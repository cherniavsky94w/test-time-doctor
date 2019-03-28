<template>
  <div id="app__projects__layout">
    <AppHeader/>
    <nuxt/>
  </div>
</template>

<script>
export default {
  components: {
    AppHeader: () => import("~/components/TemplateParts/AppHeader")
  },
  beforeMount() {
    this.$store.dispatch("authStore/checkToken");
  }
};
</script>
