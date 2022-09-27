<template>
  <div class="banner d-flex justify-end align-center">
    <img class="banner-img" src="../assets/banner.png" alt="banner" />
    <div class="banner-text">
      <h1 class="title--text">{{ title }}</h1>
      <h5 class="title--text">{{ text }}</h5>
    </div>
  </div>
</template>

<script>
export default {
  name: "HomeBanner",
  props: {
    title: {
      required: false,
      type: String,
      default: "Sabores inigualáveis",
    },
    text: {
      required: false,
      type: String,
      default: "Sinta o cuidado do preparo com ingredientes selecionados",
    },
  },
};
</script>

<style lang="scss" scoped>
.banner {
  background: linear-gradient(180deg, #091e26 0%, #00131c 100%);
  border-radius: 8px;
  position: relative;
  padding: 87px 42px;
  margin-top: 120px;

  .banner-img {
    position: absolute;
    height: 155%;
    width: auto;
    max-width: 100%;
    left: -5.5%;
    bottom: -5%;
    z-index: 1;
    opacity: 0.8;
  }
  .banner-text {
    z-index: 2;
  }
}
</style>
