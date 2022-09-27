<template>
  <v-app-bar app color="backgroundcontrast" dark height="104px">
    <v-container>
      <v-row>
        <v-col cols="12">
          <div class="d-flex justify-space-between align-center">
            <img src="../assets/logo_small.png" alt="logo" />
            <v-icon size="32" @click="logout"> $SignOut </v-icon>
          </div>
        </v-col>
      </v-row>
    </v-container>
  </v-app-bar>
</template>
<script>
export default {
  name: "AppHeader",
  methods: {
    logout() {
      localStorage.removeItem("isAuthenticated");
      this.$router.go("/autenticacao");
    },
  },
};
</script>
