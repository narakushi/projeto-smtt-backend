import type { Schema, Attribute } from '@strapi/strapi';

export interface PagePositions extends Schema.Component {
  collectionName: 'components_page_positions';
  info: {
    displayName: 'positions';
    icon: 'pinMap';
  };
  attributes: {
    lat: Attribute.Float & Attribute.Required;
    lng: Attribute.Float & Attribute.Required;
  };
}

export interface PageMenu extends Schema.Component {
  collectionName: 'components_page_menus';
  info: {
    displayName: 'menu';
    icon: 'layer';
    description: '';
  };
  attributes: {
    titulo: Attribute.String & Attribute.Required;
    url: Attribute.Text;
    documento: Attribute.Media<'files'>;
    guiaAlvo: Attribute.Enumeration<
      ['self (abrir na mesma guia)', 'blank (abrir em outra guia)']
    > &
      Attribute.Required;
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

export interface PageDocumento extends Schema.Component {
  collectionName: 'components_page_documentos';
  info: {
    displayName: 'documento';
    icon: 'filePdf';
    description: '';
  };
  attributes: {
    titulo: Attribute.String;
    documento: Attribute.Media<'images' | 'files'> & Attribute.Required;
  };
}

export interface PageDadosCardTransparencia extends Schema.Component {
  collectionName: 'components_page_dados_card_transparencias';
  info: {
    displayName: 'dadosCardTransparencia';
    icon: 'oneToMany';
    description: '';
  };
  attributes: {
    cards: Attribute.Component<'page.card', true>;
  };
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

export interface PageConteudoTextoMedia extends Schema.Component {
  collectionName: 'components_page_conteudo_texto_medias';
  info: {
    displayName: 'conteudoTextoMedia';
    icon: 'file';
    description: '';
  };
  attributes: {
    imagemEd: Attribute.Media<'images'> & Attribute.Required;
    textoEd: Attribute.Text & Attribute.Required;
  };
}

export interface PageConteudoMedia extends Schema.Component {
  collectionName: 'components_page_conteudo_medias';
  info: {
    displayName: 'conteudoMedia';
    icon: 'picture';
    description: '';
  };
  attributes: {
    titulo: Attribute.Text;
    conteudo: Attribute.Blocks & Attribute.Required;
    imagem: Attribute.Media<'images'>;
  };
}

export interface PageConteudoEducacao extends Schema.Component {
  collectionName: 'components_page_conteudo_educacaos';
  info: {
    displayName: 'conteudoEducacao';
    icon: 'layout';
  };
  attributes: {
    subtitulo: Attribute.String & Attribute.Required;
    conteudoTextoMedia: Attribute.Component<'page.conteudo-texto-media', true>;
  };
}

export interface PageCard extends Schema.Component {
  collectionName: 'components_page_cards';
  info: {
    displayName: 'card';
    icon: 'dashboard';
  };
  attributes: {
    descricao: Attribute.Text & Attribute.Required;
    url: Attribute.Text & Attribute.Required;
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

export interface PageBotaoTransparencia extends Schema.Component {
  collectionName: 'components_page_botao_transparencias';
  info: {
    displayName: 'botaoTransparencia';
    icon: 'earth';
  };
  attributes: {
    texto: Attribute.Text & Attribute.Required;
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
      'page.positions': PagePositions;
      'page.menu': PageMenu;
      'page.manifestacoes': PageManifestacoes;
      'page.legislacao': PageLegislacao;
      'page.imagem-titulo': PageImagemTitulo;
      'page.equipamentos': PageEquipamentos;
      'page.documento': PageDocumento;
      'page.dados-card-transparencia': PageDadosCardTransparencia;
      'page.conteudo': PageConteudo;
      'page.conteudo-texto-media': PageConteudoTextoMedia;
      'page.conteudo-media': PageConteudoMedia;
      'page.conteudo-educacao': PageConteudoEducacao;
      'page.card': PageCard;
      'page.card-ouvidoria': PageCardOuvidoria;
      'page.botao': PageBotao;
      'page.botao-transparencia': PageBotaoTransparencia;
      'page.botao-faq': PageBotaoFaq;
      'news.conteudo': NewsConteudo;
    }
  }
}
