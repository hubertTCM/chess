type EnvironmentSettings = {};

export type Settings = EnvironmentSettings;

declare global {
  interface Window {
    global: {
      settings: Settings;
      __SETTINGS__: string;
    };
  }
}
