<template>
  <section>
    <h2>{{ title }}</h2>
    <v-slide-group
      v-model="model"
      class="py-4"
      show-arrows
      prev-icon="$CaretLeft"
      next-icon="$CaretRight"
    >
      <v-slide-item v-for="n in 15" :key="n">
        <v-card
          class="mr-4 mt-10 food-card pa-5"
          max-height="512"
          max-width="300"
        >
          <div class="d-flex justify-end">
            <v-icon> mdi-heart-outline </v-icon>
          </div>
          <div class="d-flex justify-center">
            <img src="../assets/foods/pao.png" alt="pao" class="mt-3" />
          </div>
          <h3 class="mt-4">Torradas de Parma ></h3>
          <p class="text--text text-center mt-6">
            Presunto de parma e rúcula em um pão com fermentação natural.
          </p>
          <h2 class="text-center highlight--text mt-6">R$ 25,97</h2>
          <v-btn color="primary" class="mt-6" block> Incluir </v-btn>
        </v-card>
      </v-slide-item>
    </v-slide-group>
  </section>
</template>
<script>
export default {
  props: {
    title: {
      required: true,
      type: String,
    },
  },
  data: () => ({
    model: null,
  }),
};
</script>
<style lang="scss" scoped>
.food-card {
  background: rgba(0, 0, 0, 0.32);
  border: 1px solid rgba(0, 0, 0, 0.65);
  border-radius: 8px;
  height: 100%;
  width: 100%;
  max-width: 300px;
  max-height: 512px;
}
</style>
