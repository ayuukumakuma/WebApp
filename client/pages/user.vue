<template>
  <v-main>
    <v-card v-for="user in $store.getters['users/updateList']" :key="user">
      <v-card-title>{{ user.name }}</v-card-title>
    </v-card>
  </v-main>
</template>
<script>
export default {
  data() {
    return {
    };
  },
  mounted() {
    this.getUser();
  },
  methods: {
    getUser() {
      this.$store.dispatch("users/getList");
    },
  },
};
</script>
