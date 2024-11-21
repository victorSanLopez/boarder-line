//  je sauvegarde les données dans le local storage
export const setFavorite = (key: string, value = {}) => {
  localStorage.setItem(key, JSON.stringify([value]));
};

// je récupère les données dans le local storage
export const getFavorite = (key: string) => {
  const value = localStorage.getItem(key);
  return value ? JSON.parse(value) : [];
};
