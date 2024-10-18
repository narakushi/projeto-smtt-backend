import type { Schema, Attribute } from '@strapi/strapi';

export interface NewsConteudo extends Schema.Component {
  collectionName: 'components_news_conteudos';
  info: {
    displayName: 'conteudo';
    icon: 'bold';
  };
  attributes: {
    texto: Attribute.Blocks;
  };
}

declare module '@strapi/types' {
  export module Shared {
    export interface Components {
      'news.conteudo': NewsConteudo;
    }
  }
}
