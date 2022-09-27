<template>
  <div>
    <home-banner></home-banner>
    <home-food-section
      title="Pratos principais"
      class="mt-12"
    ></home-food-section>
  </div>
</template>

<script>
import HomeBanner from "@/components/HomeBanner.vue";
import HomeFoodSection from "@/components/HomeFoodSection.vue";
export default {
  name: "HomeView",
  components: {
    HomeBanner,
    HomeFoodSection,
  },
};
</script>
