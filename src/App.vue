<template>
  <v-app v-if="$route.name !== 'auth'">
    <v-app-bar app color="backgroundcontrast" dark>
      <span>Header</span>
    </v-app-bar>
    <v-main class="background">
      <v-container>
        <v-row>
          <v-col cols="12">
            <router-view />
          </v-col>
        </v-row>
      </v-container>
    </v-main>
    <v-footer color="backgroundcontrast" class="py-7">
      <span> Rodapé </span>
    </v-footer>
  </v-app>
  <v-app v-else>
    <router-view />
  </v-app>
</template>

<script>
export default {
  name: "App",
  data: () => ({
    isAuth: false,
  }),
};
</script>
