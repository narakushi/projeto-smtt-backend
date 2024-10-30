module.exports = {
    routes: [
      {
        method: 'GET',
        path: '/weather',
        handler: 'clima.getWeather',
        config: { auth: false }, 
      },
    ],
  };