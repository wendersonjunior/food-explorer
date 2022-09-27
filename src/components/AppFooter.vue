<template>
  <v-footer color="backgroundcontrast" height="124px">
    <v-container>
      <v-row>
        <v-col cols="12">
          <div class="d-flex justify-space-between align-center">
            <img src="../assets/logo_small_grey.png" alt="logo" />
            <span id="copy">© 2022 - Todos os direitos reservados.</span>
          </div>
        </v-col>
      </v-row>
    </v-container>
  </v-footer>
</template>
<script>
export default {
  name: "AppFooter",
};
</script>
<style lang="scss" scoped>
#copy {
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 18px;
  color: #fffaf1;
}
</style>
