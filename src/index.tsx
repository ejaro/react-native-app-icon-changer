import { NativeModules, Platform } from 'react-native';

const LINKING_ERROR =
  `The package 'react-native-icon-change-v2' doesn't seem to be linked. Make sure: \n\n` +
  Platform.select({ ios: "- You have run 'pod install'\n", default: '' }) +
  '- You rebuilt the app after installing the package\n' +
  '- You are not using Expo Go\n';

const DynamicIconManager = NativeModules.DynamicIconManager
  ? NativeModules.DynamicIconManager
  : new Proxy(
      {},
      {
        get() {
          throw new Error(LINKING_ERROR);
        },
      }
    );

/**
 * Changes the app icon to the specified icon name
 * @param icon The name of the icon to change to (or null to reset)
 * @returns A promise that resolves when the icon change is complete
 */
export function setIcon(icon: string | null): Promise<void> {
  return DynamicIconManager.setIcon(icon);
}
/**
 * Gets all available alternative icons for the app
 * @returns A promise that resolves to an array of available icon names
 */
export function getAllAlternativeIcons(): Promise<string[]> {
  return DynamicIconManager.getAllAlternativeIcons();
}
/**
 * Resets the app icon to the default
 * @returns A promise that resolves to the default icon name when reset is complete
 */
export function resetIcon(): Promise<string> {
  return DynamicIconManager.resetIcon();
}
/**
 * Gets the currently active icon name
 * @returns A promise that resolves to the current icon name
 */
export function getActiveIcon(): Promise<string> {
  return DynamicIconManager.getActiveIcon();
}
