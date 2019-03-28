<template>
  <div id="projects__page">
    <div class="auth__form__input input__default" :class="{'error': serverErrors}">
      <!-- <label for="email">Email</label> -->
      <input name="Name" v-model="form.name" placeholder="Name" :disabled="loading">
      <span class="errors" v-if="serverErrors && serverErrors.name">{{ serverErrors.name }}</span>
    </div>
    <div>
      <button @click="submit" class="auth__form__submit btn__default" :disabled="loading">Submit</button>
    </div>
  </div>
</template>

<script>
export default {
  layout: "projects",
  data: () => ({
    serverErrors: false,
    loading: false,
    form: {
      name: ""
    }
  }),
  watch: {
    "$route.params": {
      handler: function() {
        this.fetch();
      },
      deep: true,
      immediate: true
    }
  },
  methods: {
    fetch: async function() {
      try {
        this.project = await this.$store.dispatch(
          "projectsStore/fetchProjectById",
          this.$route.params.id
        );
        this.form = { ...this.project };
      } catch (err) {
        console.error(err);
      }
    },
    submit: async function() {
      this.loading = true;
      try {
        await this.$store.dispatch("projectsStore/updateProject", this.form);
        this.$router.push("/home");
      } catch (err) {
        this.serverErrors = err.data ? err.data.first_errors : false;
      }
      setTimeout(() => {
        this.loading = false;
      }, 2000);
    }
  }
};
</script>
