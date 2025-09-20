import * as React from "react";

export const useFavouritesStore = () => {
  const [localFavourites, setLocalFavourites] = React.useState(() => {
    return JSON.parse(localStorage.getItem("favourites") || "[]");
  });

  const toggleFavourite = (pageId) => {
    setLocalFavourites((prev) => {
      const isFavourite = prev.includes(pageId);
      const updated = isFavourite
        ? prev.filter((id) => id !== pageId)
        : [...prev, pageId];

      localStorage.setItem("favourites", JSON.stringify(updated));
      return updated;
    });
  };

  return {
    favourites: localFavourites,
    toggleFavourite,
  };
};
