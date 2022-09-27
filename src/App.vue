<template>
  <v-app v-if="$route.name !== 'auth'">
    <app-header></app-header>
    <v-main class="background">
      <v-container>
        <v-row>
          <v-col cols="12">
            <router-view />
          </v-col>
        </v-row>
      </v-container>
    </v-main>
    <app-footer></app-footer>
  </v-app>
  <v-app v-else>
    <router-view />
  </v-app>
</template>

<script>
import AppHeader from "./components/AppHeader.vue";
import AppFooter from "./components/AppFooter.vue";
export default {
  name: "App",
  components: {
    AppHeader,
    AppFooter,
  },
  data: () => ({
    isAuth: false,
  }),
};
</script>
