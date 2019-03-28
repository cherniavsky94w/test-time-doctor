<template>
  <div id="projects__page">
    <ProjectItem v-for="p in projects" :key="p.id" :item="p"/>
  </div>
</template>

<script>
import { mapGetters } from "vuex";

export default {
  layout: "projects",
  components: {
    ProjectItem: () => import("~/components/Projects/Item")
  },
  computed: {
    ...mapGetters({
      projects: "projectsStore/PROJECTS"
    })
  },
  mounted() {
    this.fetchProjects();
  },
  methods: {
    fetchProjects: async function() {
      await this.$store.dispatch("projectsStore/fetchProjects");
    }
  }
};
</script>

