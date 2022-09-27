import Vue from "vue";
import Vuetify from "vuetify/lib/framework";
import pt from "vuetify/es5/locale/pt";

// Custom Icons
import CaretLeftIcon from "@/assets/icons/CaretLeftIcon.vue";
import CaretRightIcon from "@/assets/icons/CaretRightIcon.vue";
import CreditCardIcon from "@/assets/icons/CreditCardIcon.vue";
import ForkKnifeIcon from "@/assets/icons/ForkKnifeIcon.vue";
import MinusIcon from "@/assets/icons/MinusIcon.vue";
import PlusIcon from "@/assets/icons/PlusIcon.vue";
import ReceiptIcon from "@/assets/icons/ReceiptIcon.vue";
import SignOutIcon from "@/assets/icons/SignOutIcon.vue";

Vue.use(Vuetify);

export default new Vuetify({
  lang: {
    locales: { pt },
    current: "pt",
  },
  icons: {
    values: {
      CaretLeft: {
        component: CaretLeftIcon,
      },
      CaretRight: {
        component: CaretRightIcon,
      },
      CreditCard: {
        component: CreditCardIcon,
      },
      ForkKnife: {
        component: ForkKnifeIcon,
      },
      Minus: {
        component: MinusIcon,
      },
      Plus: {
        component: PlusIcon,
      },
      Receipt: {
        component: ReceiptIcon,
      },
      SignOut: {
        component: SignOutIcon,
      },
    },
  },
  theme: {
    dark: true,
    default: "dark",
    themes: {
      dark: {
        // CTA's
        primary: "#92000E",
        secondary: "#750310",

        // Backgrounds
        background: "#000A0F",
        backgroundcontrast: "#00111A",

        // Status
        error: "#AB222E",
        warning: "#FBA94C",
        success: "#04D361",

        // Texts
        title: "#E1E1E6",
        text: "#C4C4CC",
        highlight: "#82F3FF",
      },
    },
  },
});
