<template>
  <div class="auth__form">
    <h4>Login</h4>
    <div class="auth__form__input input__default" :class="{'error': serverErrors}">
      <!-- <label for="email">Email</label> -->
      <input name="email" v-model="form.email" placeholder="Email" :disabled="loading">
      <span class="errors" v-if="serverErrors && serverErrors.email">{{ serverErrors.email }}</span>
    </div>
    <div class="auth__form__input input__default" :class="{'error': serverErrors}">
      <!-- <label for="password" placeholder="Password">Password</label> -->
      <input
        name="password"
        type="password"
        v-model="form.password"
        placeholder="Password"
        :disabled="loading"
      >
      <span class="errors" v-if="serverErrors && serverErrors.password">{{ serverErrors.password }}</span>
    </div>
    <div>
      <button @click="submit" class="auth__form__submit btn__default" :disabled="loading">Submit</button>
    </div>
  </div>
</template>

<script>
export default {
  name: "auth-form",
  data: () => ({
    loading: false,
    serverErrors: null,
    form: {
      email: "",
      password: ""
    }
  }),
  methods: {
    submit: async function() {
      this.loading = true;
      this.serverErrors = false;
      try {
        await this.$store.dispatch("authStore/auth", this.form);
        this.$router.push("/home");
      } catch (err) {
        this.serverErrors = err.data ? err.data.first_errors : false;
        console.error(err);
      }
      setTimeout(() => (this.loading = false), 2000);
    }
  }
};
</script>

<style scoped>
</style>

