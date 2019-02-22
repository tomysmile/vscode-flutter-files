import * as path from 'path';
import { TemplateType } from './enums/template-type';
import { ResourceType } from './enums/resource-type';
import { IResource } from './models/resource';
import { OptionType } from './enums/option-type';
import { IConfig } from './models/config';

export const resources = new Map<ResourceType, IResource>([
  [
    ResourceType.Bloc,
    {
      files: [{ name: (config: IConfig) => 'bloc.dart', type: TemplateType.Bloc }],
      createFolder: (config: IConfig) =>
        config && config.defaults && config.defaults.bloc ? !config.defaults.bloc.flat : false,
      options: [OptionType.Flat, OptionType.AppName],
    },
  ],
  [
    ResourceType.Event,
    {
      files: [{ name: () => 'event.dart', type: TemplateType.Event }],
      createFolder: (config: IConfig) =>
        config && config.defaults && config.defaults.event ? !config.defaults.event.flat : false,
      options: [OptionType.Flat, OptionType.AppName],
    },
  ],
  [
    ResourceType.Page,
    {
      files: [{ name: () => 'page.dart', type: TemplateType.Page }],
      createFolder: (config: IConfig) =>
        config && config.defaults && config.defaults.page ? !config.defaults.page.flat : false,
      options: [OptionType.Flat, OptionType.AppName],
    },
  ],
  [
    ResourceType.Provider,
    {
      files: [{ name: () => 'provider.dart', type: TemplateType.Provider }],
      createFolder: (config: IConfig) =>
        config && config.defaults && config.defaults.provider
          ? !config.defaults.provider.flat
          : false,
      options: [OptionType.Flat, OptionType.AppName],
    },
  ],
  [
    ResourceType.Repository,
    {
      files: [{ name: () => 'repository.dart', type: TemplateType.Repository }],
      createFolder: (config: IConfig) =>
        config && config.defaults && config.defaults.repository
          ? !config.defaults.repository.flat
          : false,
      options: [OptionType.Flat, OptionType.AppName],
    },
  ],
  [
    ResourceType.Screen,
    {
      files: [{ name: () => 'screen.dart', type: TemplateType.Screen }],
      createFolder: (config: IConfig) =>
        config && config.defaults && config.defaults.screen ? !config.defaults.screen.flat : false,
      options: [OptionType.Flat, OptionType.AppName],
    },
  ],
  [
    ResourceType.Model,
    {
      files: [{ name: () => 'model.dart', type: TemplateType.Model }],
      createFolder: (config: IConfig) =>
        config && config.defaults && config.defaults.model ? !config.defaults.model.flat : false,
      options: [OptionType.Flat, OptionType.AppName],
    },
  ],
  [
    ResourceType.State,
    {
      files: [{ name: () => 'state.dart', type: TemplateType.State }],
      createFolder: (config: IConfig) =>
        config && config.defaults && config.defaults.state ? !config.defaults.state.flat : false,
      options: [OptionType.Flat, OptionType.AppName],
    },
  ],
  [
    ResourceType.Index,
    {
      files: [{ name: () => 'index.dart', type: TemplateType.Index }],
      createFolder: (config: IConfig) =>
        config && config.defaults && config.defaults.index ? !config.defaults.index.flat : false,
      options: [OptionType.Flat, OptionType.AppName],
    },
  ],
]);
