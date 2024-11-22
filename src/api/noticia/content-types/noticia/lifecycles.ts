import slugify from 'slugify';

interface NoticiaData {
  titulo: string;
  slug?: string;
}

const lifecycles = {
  async beforeCreate(event: { params: { data: NoticiaData } }) {
    const { data } = event.params;

    if (data.titulo) {
      let newSlug = slugify(data.titulo, { lower: true, strict: true });

      let existingEntry = await strapi.db.query('api::noticia.noticia').findOne({
        where: { slug: newSlug },
      });

      let suffix = 1;
      while (existingEntry) {
        newSlug = `${slugify(data.titulo, { lower: true, strict: true })}-${suffix}`;
        suffix++;
        existingEntry = await strapi.db.query('api::noticia.noticia').findOne({
          where: { slug: newSlug },
        });
      }

      data.slug = newSlug;
    }
  },

  async beforeUpdate(event: { params: { data: NoticiaData } }) {
    const { data } = event.params;

    if (data.titulo) {
      let newSlug = slugify(data.titulo, { lower: true, strict: true });

      let existingEntry = await strapi.db.query('api::noticia.noticia').findOne({
        where: { slug: newSlug },
      });

      let suffix = 1;
      while (existingEntry) {
        newSlug = `${slugify(data.titulo, { lower: true, strict: true })}-${suffix}`;
        suffix++;
        existingEntry = await strapi.db.query('api::noticia.noticia').findOne({
          where: { slug: newSlug },
        });
      }

      data.slug = newSlug;
    }
  },
};

export default lifecycles;
