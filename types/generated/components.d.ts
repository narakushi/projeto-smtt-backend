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

export interface PageManifestacoes extends Schema.Component {
  collectionName: 'components_page_manifestacoes';
  info: {
    displayName: 'manifestacoes';
    icon: 'volumeUp';
  };
  attributes: {
    tipo: Attribute.String & Attribute.Required;
    url: Attribute.Text & Attribute.Required;
  };
}

export interface PageLegislacao extends Schema.Component {
  collectionName: 'components_page_legislacaos';
  info: {
    displayName: 'legislacao';
    icon: 'feather';
    description: '';
  };
  attributes: {
    subtitulo: Attribute.String & Attribute.Required;
    botao: Attribute.Component<'page.botao', true> & Attribute.Required;
  };
}

export interface PageImagemTitulo extends Schema.Component {
  collectionName: 'components_page_imagem_titulos';
  info: {
    displayName: 'imagemTitulo';
    description: '';
  };
  attributes: {
    imagem: Attribute.Media<'images'> & Attribute.Required;
  };
}

export interface PageEquipamentos extends Schema.Component {
  collectionName: 'components_page_equipamentos';
  info: {
    displayName: 'equipamentos';
  };
  attributes: {};
}

export interface PageConteudo extends Schema.Component {
  collectionName: 'components_page_conteudos';
  info: {
    displayName: 'conteudo';
    icon: 'file';
    description: '';
  };
  attributes: {
    subtitulo: Attribute.String & Attribute.Required;
    conteudo: Attribute.Blocks & Attribute.Required;
  };
}

export interface PageCardOuvidoria extends Schema.Component {
  collectionName: 'components_page_card_ouvidorias';
  info: {
    displayName: 'cardOuvidoria';
    icon: 'volumeUp';
    description: '';
  };
  attributes: {
    titulo: Attribute.Text & Attribute.Required;
    conteudo: Attribute.Text & Attribute.Required;
    rodape: Attribute.Blocks & Attribute.Required;
  };
}

export interface PageBotao extends Schema.Component {
  collectionName: 'components_page_botaos';
  info: {
    displayName: 'botao';
    icon: 'link';
    description: '';
  };
  attributes: {
    titulo: Attribute.String & Attribute.Required;
    url: Attribute.Text & Attribute.Required;
  };
}

export interface PageBotaoFaq extends Schema.Component {
  collectionName: 'components_page_botao_faqs';
  info: {
    displayName: 'botaoFaq';
    icon: 'question';
    description: '';
  };
  attributes: {
    pergunta: Attribute.Text & Attribute.Required;
    resposta: Attribute.Text & Attribute.Required;
  };
}

declare module '@strapi/types' {
  export module Shared {
    export interface Components {
      'news.conteudo': NewsConteudo;
      'page.manifestacoes': PageManifestacoes;
      'page.legislacao': PageLegislacao;
      'page.imagem-titulo': PageImagemTitulo;
      'page.equipamentos': PageEquipamentos;
      'page.conteudo': PageConteudo;
      'page.card-ouvidoria': PageCardOuvidoria;
      'page.botao': PageBotao;
      'page.botao-faq': PageBotaoFaq;
    }
  }
}
