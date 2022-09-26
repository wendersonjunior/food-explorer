<template>
  <v-form ref="form" v-model="valid" lazy-validation>
    <h2 class="text-center mb-8">Faça login</h2>
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

    <v-btn color="primary" block height="48" @click="login"> Entrar </v-btn>

    <h4 class="mt-8 d-flex justify-center" @click="$emit('change-to-register')">
      Criar uma conta
    </h4>
  </v-form>
</template>

<script>
import { rules } from "@/helpers/rules.js";

export default {
  name: "AuthLogin",
  data: () => ({
    valid: true,
    email: "",
    password: "",
    rules: rules,
  }),

  methods: {
    login() {
      if (this.$refs.form.validate()) {
        localStorage.isAuthenticated = true;
        this.$router.push("/");
      }
    },
  },
};
</script>
