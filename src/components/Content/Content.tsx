import { useSelector } from "react-redux";

import { Loader } from "@alfalab/core-components/loader";
import { Typography } from "@alfalab/core-components/typography";
import { AnimalCard } from "../AnimalCard";

import {
  errorSelector,
  likedAnimalsSelector,
  loadingSelector,
  visibleAnimalsSelector,
} from "../../store/animals/selectors";

import styles from "./Content.module.css";

export const Content = () => {
  const error = useSelector(errorSelector);
  const loading = useSelector(loadingSelector);
  const likedAnimals = useSelector(likedAnimalsSelector);
  const visibleAnimals = useSelector(visibleAnimalsSelector);

  return (
    <div className={styles.Content}>
      {visibleAnimals.length === 0 ? (
        <Typography.Title
          className={styles.Centered}
          view="medium"
          tag="div"
          color="negative"
        >
          No animals to show
        </Typography.Title>
      ) : null}
      {visibleAnimals.map((animal) => (
        <AnimalCard
          animal={animal}
          isLiked={likedAnimals.includes(animal.id)}
        />
      ))}
      {loading && <Loader className={styles.Centered} />}
      {error && (
        <Typography.Title
          className={styles.Centered}
          view="medium"
          tag="div"
          color="negative"
        >
          Error occured during loading new animals
        </Typography.Title>
      )}
    </div>
  );
};
