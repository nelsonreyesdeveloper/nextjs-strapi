import type { Schema, Attribute } from '@strapi/strapi';

export interface LayoutHeroSection extends Schema.Component {
  collectionName: 'components_layout_hero_sections';
  info: {
    displayName: 'Hero Section';
    description: '';
  };
  attributes: {
    Heading: Attribute.String;
    SubHeading: Attribute.String;
    image: Attribute.Media<'images'>;
    link: Attribute.Component<'components.link'>;
  };
}

export interface LayoutHeader extends Schema.Component {
  collectionName: 'components_layout_headers';
  info: {
    displayName: 'Header';
  };
  attributes: {
    logoText: Attribute.Component<'components.link'>;
    ctaButton: Attribute.Component<'components.link'>;
  };
}

export interface LayoutFooter extends Schema.Component {
  collectionName: 'components_layout_footers';
  info: {
    displayName: 'Footer';
  };
  attributes: {
    logoText: Attribute.Component<'components.link'>;
    text: Attribute.String;
    SociaLink: Attribute.Component<'components.link', true>;
  };
}

export interface LayoutFeatures extends Schema.Component {
  collectionName: 'components_layout_features';
  info: {
    displayName: 'Features Section';
    description: '';
  };
  attributes: {
    title: Attribute.String;
    description: Attribute.Text;
    feature: Attribute.Component<'components.feature', true>;
  };
}

export interface ComponentsSocialLink extends Schema.Component {
  collectionName: 'components_components_social_links';
  info: {
    displayName: 'Social Link';
  };
  attributes: {};
}

export interface ComponentsLink extends Schema.Component {
  collectionName: 'components_components_links';
  info: {
    displayName: 'link';
  };
  attributes: {
    url: Attribute.String;
    text: Attribute.String;
    isExternal: Attribute.Boolean & Attribute.DefaultTo<false>;
  };
}

export interface ComponentsFeature extends Schema.Component {
  collectionName: 'components_components_features';
  info: {
    displayName: 'Feature';
  };
  attributes: {
    Heading: Attribute.String;
    Subheading: Attribute.Text;
    icon: Attribute.Enumeration<['CLOCK_ICON', 'CHECK_ICON', 'CLOUD_ICON']>;
  };
}

declare module '@strapi/types' {
  export module Shared {
    export interface Components {
      'layout.hero-section': LayoutHeroSection;
      'layout.header': LayoutHeader;
      'layout.footer': LayoutFooter;
      'layout.features': LayoutFeatures;
      'components.social-link': ComponentsSocialLink;
      'components.link': ComponentsLink;
      'components.feature': ComponentsFeature;
    }
  }
}
