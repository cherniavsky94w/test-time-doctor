<template>
  <!-- <nuxt-link :to="`/project/${item.id}`"> -->
  <div class="project__item" @click="$router.push(`/project/${item.id}`)">
    <div class="logo">
      <img v-if="item.logo_url" :src="item.logo_url">
      <span v-else>{{item.name.charAt(0)}}</span>
    </div>
    <div class="name">{{ item.name }}</div>
    <div class="status" :class="{'active': item.is_active}">{{ isActiveText }}</div>
    <div class="stat">
      <ul>
        <li>
          <span class="title">Time this week:</span>
          <span>{{ spent_time_week }}</span>
        </li>
        <li>
          <span class="title">This month:</span>
          <span>{{ spent_time_month }}</span>
        </li>
        <li>
          <span class="title">Total:</span>
          <span>{{ spent_time_all }}</span>
        </li>
      </ul>
    </div>
  </div>
  <!-- </nuxt-link> -->
</template>

<script>
import moment from "moment";
require("moment-duration-format");

export default {
  name: "project-item",
  props: {
    item: {
      type: Object,
      default: () => ({})
    }
  },
  computed: {
    isActiveText() {
      return this.item.is_active ? "Active" : "Disable";
    },
    spent_time_week() {
      return moment.duration(this.item.spent_time_week).format("HH:mm:ss", {
        trim: false
      });
    },
    spent_time_month() {
      return moment.duration(this.item.spent_time_month).format("HH:mm:ss", {
        trim: false
      });
    },
    spent_time_all() {
      return moment.duration(this.item.spent_time_all).format("HH:mm:ss", {
        trim: false
      });
    }
  }
};
</script>
