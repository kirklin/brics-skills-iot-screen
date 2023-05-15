/**
     * Stores data in local storage.
     * @param key The key name.
     * @param value The value to store (no need to stringify).
     * @returns A removable reference.
     */
export const setLocalStorage = <T>(key: string, value: T) => {
  try {
    window.localStorage.setItem(key, JSON.stringify(value));
  } catch (error) {
    return false;
  }
};

/**
 * Retrieves data from local storage.
 * @param key The key name.
 * @returns Any data stored under the given key.
 */
export const getLocalStorage = (key: string) => {
  const item = window.localStorage.getItem(key);
  try {
    return item ? JSON.parse(item) : item;
  } catch (err) {
    return item;
  }
};

/**
 * Clears data from local storage.
 * @param name The name of the data to clear.
 */
export const clearLocalStorage = (name: string) => {
  window.localStorage.removeItem(name);
};

/**
 * Stores data in session storage.
 * @param key The key name.
 * @param value The value to store.
 * @returns A removable reference.
 */
export const setSessionStorage = <T>(key: string, value: T) => {
  try {
    window.sessionStorage.setItem(key, JSON.stringify(value));
  } catch (error) {
    return false;
  }
};

/**
 * Retrieves data from session storage.
 * @param key The key name.
 * @returns Any data stored under the given key.
 */
export const getSessionStorage: (key: string) => any = (key: string) => {
  const item = window.sessionStorage.getItem(key);
  try {
    return item ? JSON.parse(item) : item;
  } catch (err) {
    return item;
  }
};

/**
 * Clears data from session storage.
 * @param name The name of the data to clear.
 */
export const clearSessionStorage = (name: string) => {
  window.sessionStorage.removeItem(name);
};
