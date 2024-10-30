

export default {
  config: {
    head: {
      title: "SMTT Admin",
      favicon: "./extension/favicon.png"
    },

    locales: [
      'pt-BR',
    ],

    translations: {
      "pt-BR": {
        "app.components.LeftMenu.navbrand.title": "Dashboard SMTT",

        "app.components.LeftMenu.navbrand.workplace": "Gerenciador",

        "Auth.form.welcome.title": "Bem-vindo(a) ao gerenciador de dados da SMTT",

        "Auth.form.welcome.subtitle": "Faça login na sua conta",
      },
      en: {
        "app.components.LeftMenu.navbrand.title": "Dashboard SMTT",

        "app.components.LeftMenu.navbrand.workplace": "Management",

        "Auth.form.welcome.title": "Welcome to SMTT data management",

        "Auth.form.welcome.subtitle": "Login your account"
      },
    }

  },
  bootstrap(app: any) {
    console.log(app);
    document.title = "SMTT Admin"
  },
};
