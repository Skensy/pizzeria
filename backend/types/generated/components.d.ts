import type { Schema, Struct } from '@strapi/strapi';

export interface SharedOpeningHours extends Struct.ComponentSchema {
  collectionName: 'components_shared_opening_hours';
  info: {
    displayName: 'Opening Hours';
    icon: 'clock';
  };
  attributes: {
    days: Schema.Attribute.String;
    time: Schema.Attribute.String;
  };
}

declare module '@strapi/strapi' {
  export module Public {
    export interface ComponentSchemas {
      'shared.opening-hours': SharedOpeningHours;
    }
  }
}
