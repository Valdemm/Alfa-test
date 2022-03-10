import axios from "axios";
import { Animal } from "./types";

export const setError = () => ({
  type: "animals/SET_ERROR",
});

export const switchShowOnlyLikedAnimals = () => ({
  type: "animals/SWITCH_SHOW_ONLY_LIKED_ANIMALS",
});

export const switchLike = (id: number) => ({
  type: "animals/SWITCH_LIKE",
  data: { id },
});

export const setLoading = (loading: boolean) => ({
  type: "animals/SET_LOADING",
  data: { loading },
});

export const deleteAnimal = (id: number) => ({
  type: "animals/DELETE_ANIMAL",
  data: { id },
});

export const saveAnimals = (animals: Animal[]) => ({
  type: "animals/SAVE_ANIMALS",
  data: { animals },
});

export const fetchAnimals = () => async (dispatch) => {
  try {
    dispatch(setLoading(true));

    const { data } = await axios.get(
      "https://zoo-animal-api.herokuapp.com/animals/rand/6"
    );

    dispatch(saveAnimals(data));

    dispatch(setLoading(false));
  } catch (error) {
    dispatch(setError());
  }
};
