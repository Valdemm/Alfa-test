import { createSelector } from "reselect";
import { Store } from "./types";

export const animalsStoreSelector = (store): Store => store.animals;

export const animalsSelector = createSelector(
  animalsStoreSelector,
  (animalsStore) => animalsStore.animals
);

export const errorSelector = createSelector(
  animalsStoreSelector,
  (animalsStore) => animalsStore.error
);

export const loadingSelector = createSelector(
  animalsStoreSelector,
  (animalsStore) => animalsStore.loading
);

export const showOnlyLikedAnimalsSelector = createSelector(
  animalsStoreSelector,
  (animalsStore) => animalsStore.showOnlyLikedAnimals
);

export const likedAnimalsSelector = createSelector(
  animalsStoreSelector,
  (animalsStore) => animalsStore.likedAnimals
);

export const visibleAnimalsSelector = createSelector(
  [animalsSelector, showOnlyLikedAnimalsSelector, likedAnimalsSelector],
  (animals, showOnlyLikedAnimals, likedAnimals) => {
    if (showOnlyLikedAnimals) {
      return animals.filter((animal) => likedAnimals.includes(animal.id));
    }

    return animals;
  }
);
