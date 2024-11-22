import { factories } from '@strapi/strapi';

export default factories.createCoreController('api::noticia.noticia', ({ strapi }) => ({
  async search(ctx) {
    const { searchTerm } = ctx.query;

    if (!searchTerm) {
      return ctx.badRequest('searchTerm is required');
    }

    const results = await strapi.db.query('api::noticia.noticia').findMany({
      where: {
        // Aplica a conversão no SQL
        conteudo: {
          $containsi: searchTerm, 
        },
      },
      populate: ['imagens'],
      limit: 10,
      orderBy: {updatedAt: "desc"},
    });

    const processedResults = results.map((result) => ({
      ...result,
      imagens: result?.imagens?.[0] ? result.imagens[0] : null,
    }))

    return processedResults;
  },
}));