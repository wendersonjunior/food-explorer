<template>
  <v-form ref="form" v-model="valid" lazy-validation>
    <h1 class="text-center mb-8">Faça login</h1>
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

    <h4 class="text-center mt-8">Criar uma conta</h4>
  </v-form>
</template>

<script>
export default {
  name: "AuthLogin",
  data: () => ({
    valid: true,
    email: "",
    password: "",
    rules: {
      required: (value) => !!value || "Campo obrigatório",
      min: (v) => v.length >= 6 || "No mínimo 6 caracteres",
      email: (v) => /.+@.+\..+/.test(v) || "E-mail inválido",
    },
  }),

  methods: {
    validate() {
      this.$refs.form.validate();
    },
  },
};
</script>
