export const useStorage = () => {
  const setStorageData = (dataName, data) => {
    window.localStorage.setItem(dataName, JSON.stringify(data));
  };

  const getStorageData = (dataName) => {
    return JSON.parse(window.localStorage.getItem(dataName));
  };

  const removeStorageData = (dataName) => {
    window.localStorage.removeItem(dataName);
  };

  return { setStorageData, getStorageData, removeStorageData };
};
