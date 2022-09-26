export const rules = {
  required: (value) => !!value || "Campo obrigatório",
  min: (v) => v.length >= 6 || "No mínimo 6 caracteres",
  email: (v) => /.+@.+\..+/.test(v) || "E-mail inválido",
};
