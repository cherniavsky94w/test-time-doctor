<template>
  <section id="auth">
    <AuthForm/>
  </section>
</template>

<script>
export default {
  components: {
    AuthForm: () => import("~/components/Auth/AuthForm")
  }
};
</script>

<style>
</style>

