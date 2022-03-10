import { Store } from "./types";

const initialState: Store = {
  animals: [],
  error: false,
  likedAnimals: [],
  loading: true,
  showOnlyLikedAnimals: false,
};

export default function reducer(state = initialState, { type, data }) {
  switch (type) {
    case "animals/SET_ERROR":
      return {
        ...state,
        error: true,
      };

    case "animals/SET_LOADING":
      return {
        ...state,
        loading: data.loading,
      };

    case "animals/SAVE_ANIMALS":
      return {
        ...state,
        animals: [...state.animals, ...data.animals],
      };

    case "animals/SWITCH_LIKE":
      if (state.likedAnimals.includes(data.id)) {
        return {
          ...state,
          likedAnimals: state.likedAnimals.filter((id) => id !== data.id),
        };
      }

      return {
        ...state,
        likedAnimals: [...state.likedAnimals, data.id],
      };

    case "animals/SWITCH_SHOW_ONLY_LIKED_ANIMALS":
      return {
        ...state,
        showOnlyLikedAnimals: !state.showOnlyLikedAnimals,
      };

    case "animals/DELETE_ANIMAL":
      return {
        ...state,
        animals: state.animals.filter((animal) => animal.id !== data.id),
        likedAnimals: state.likedAnimals.filter(
          (animalId) => animalId !== data.id
        ),
      };

    default:
      return state;
  }
}
