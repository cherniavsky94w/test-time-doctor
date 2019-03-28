<template>
  <div class="main__header">
    <div class="title" @click="$router.push('/')">Q</div>
    <div class="space"></div>
    <button>Projects</button>
    <button @click="logout">Logout</button>
  </div>
</template>

<script>
export default {
  name: "AppHeader",
  data: () => ({}),
  computed: {
    isLogged() {
      return this.$store.getters["authStore/IS_LOGGED"];
    }
  },
  methods: {
    logout() {
      this.$store.dispatch("authStore/logout");
      this.$router.push("/");
    }
  }
};
</script>
