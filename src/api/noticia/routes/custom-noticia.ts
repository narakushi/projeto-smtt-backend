export default {
    routes: [
      {
        method: 'GET',
        path: '/noticias/search',
        handler: 'noticia.search',
        config: {
          auth: false, // Define se a rota precisa de autenticação
        },
      },
    ],
  };
  