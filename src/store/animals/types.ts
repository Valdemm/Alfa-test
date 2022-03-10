export type Store = {
  animals: Animal[];
  error: boolean;
  likedAnimals: number[];
  loading: boolean;
  showOnlyLikedAnimals: boolean;
};

export type Animal = {
  active_time: string;
  animal_type: string;
  diet: string;
  geo_range: string;
  habitat: string;
  id: number;
  image_link: string;
  latin_name: string;
  length_max: string;
  length_min: string;
  lifespan: string;
  name: string;
  weight_max: string;
  weight_min: string;
};
