declare module 'react-native-app-icon-changer' {
  /**
   * Changes the app icon to the specified icon name
   * @param iconName The name of the icon to change to (or null to reset)
   * @returns A promise that resolves when the icon change is complete
   */
  export function setIcon(iconName: string | null): Promise<void>;

  /**
   * Gets all available alternative icons for the app
   * @returns A promise that resolves to an array of available icon names
   */
  export function getAllAlternativeIcons(): Promise<string[]>;

  /**
   * Resets the app icon to the default
   * @returns A promise that resolves to the default icon name when reset is complete
   */
  export function resetIcon(): Promise<string>;

  /**
   * Gets the currently active icon name
   * @returns A promise that resolves to the current icon name
   */
  export function getActiveIcon(): Promise<string>;
}
