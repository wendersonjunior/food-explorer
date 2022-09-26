<template>
  <v-form ref="form" v-model="valid" lazy-validation>
    <h2 class="text-center mb-8">Crie sua conta</h2>
    <v-text-field
      v-model="name"
      :rules="[rules.required]"
      required
      label="Seu nome"
      placeholder="Exemplo: Maria da Silva"
      outlined
      color="success"
    ></v-text-field>
    <v-text-field
      v-model="email"
      :rules="[rules.email, rules.required]"
      required
      label="Email"
      placeholder="Exemplo: exemplo@exemplo.com.br"
      outlined
      color="success"
    ></v-text-field>
    <v-text-field
      type="password"
      v-model="password"
      :rules="[rules.min, rules.required]"
      required
      label="Senha"
      placeholder="No mínimo 6 caracteres"
      outlined
      color="success"
    ></v-text-field>

    <v-btn color="primary" block height="48"> Entrar </v-btn>

    <h4 class="mt-8 d-flex justify-center" @click="$emit('change-to-login')">
      Já tenho uma conta
    </h4>
  </v-form>
</template>

<script>
import { rules } from "@/helpers/rules.js";

export default {
  name: "AuthRegister",
  data: () => ({
    valid: true,
    name: "",
    email: "",
    password: "",
    rules: rules,
  }),

  methods: {
    validate() {
      this.$refs.form.validate();
    },
  },
};
</script>
