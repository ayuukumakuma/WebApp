<template>
  <v-main>
    <v-container>
      <v-row>
        <v-col>
          <v-card
            v-for="user in $store.getters['users/updateList']"
            :key="user.created_at"
          >
            <v-card-title>{{ user.name }}</v-card-title>
          </v-card>
        </v-col>
      </v-row>
      <v-row>
        <v-col>
          <v-text-field
          label="Text"
          v-model="text"
          prepend-icon=""
          type="text"
          @click="text=''"
        />
        </v-col>
        <v-col>
          <v-btn x-large rounded color="primary" @click="addUser">ADD</v-btn>
        </v-col>
        <v-col>
          <v-btn x-large rounded color="primary" @click="removeUser">DELETE</v-btn>
        </v-col>
      </v-row>
    </v-container>
  </v-main>
</template>
<script>
export default {
  data() {
    return {
      text: '',
    };
  },
  mounted() {
    this.getUser();
  },
  methods: {
    getUser() {
      this.$store.dispatch("users/getList");
    },
    removeUser() {
      const user = this.$store.getters['users/updateList'][0]
      this.$store.dispatch("users/deleteList", user.id)
    },
    addUser() {
      this.$store.dispatch("users/postList",this.text)
    }
  },
};
</script>
