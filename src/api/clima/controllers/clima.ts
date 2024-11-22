"use strict";
import axios from "axios";

module.exports = {
  async getWeather(ctx) {
    const cityName = ctx.query.city_name || "São Paulo,SP";

    try {
      const response = await axios.get("https://api.hgbrasil.com/weather?woeid=455836", {
        params: { city_name: cityName },
      });

      console.log(response)
      return ctx.send(response.data);  // Retorna o JSON da API
    } catch (error) {
      // Em caso de erro, envia uma mensagem apropriada
      ctx.send({
        error: "Erro ao obter dados do clima",
        message: error.message,
      });
    }
  },
};