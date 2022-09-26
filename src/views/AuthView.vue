<template>
  <div id="auth-page">
    <v-container>
      <v-row>
        <v-col cols="12" lg="6" class="d-flex justify-center align-center">
          <img src="../assets/logo.png" alt="logo" width="100%" height="100%" />
        </v-col>
        <v-col cols="12" lg="6" class="d-flex justify-center">
          <div id="auth-form" class="backgroundcontrast">
            <auth-login v-if="isLogin"></auth-login>
            <auth-register v-else></auth-register>
          </div>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<script>
import AuthLogin from "@/components/AuthLogin.vue";
import AuthRegister from "@/components/AuthRegister.vue";

export default {
  name: "AuthView",
  components: {
    AuthLogin,
    AuthRegister,
  },
  data: () => ({
    isLogin: true,
  }),
};
</script>

<style lang="scss" scoped>
#auth-page {
  min-height: 100vh;

  display: flex;
  align-items: center;
  justify-content: center;

  img {
    width: 100%;
    height: 100%;

    max-width: 324px;
    max-height: 48px;
  }

  div#auth-form {
    width: 100%;
    max-width: 476px;

    padding: 64px;
    border-radius: 16px;
  }
}
</style>
