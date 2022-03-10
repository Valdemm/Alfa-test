import { Typography } from "@alfalab/core-components/typography";
import Heart from "react-animated-heart";
import { useDispatch } from "react-redux";
import { TrashIcon } from "./TrashIcon";
import { deleteAnimal, switchLike } from "../../store/animals/actions";

import { Animal } from "../../store/animals/types";

import styles from "./AnimalCard.module.css";

type Props = {
  animal: Animal;
  isLiked: boolean;
};

export const AnimalCard = ({ animal, isLiked }: Props) => {
  const dispatch = useDispatch();

  return (
    <div className={styles.AnimalCard}>
      <img
        src={animal.image_link}
        className={styles.CardImage}
        alt={animal.name}
      />
      <div className={styles.CardDescription}>
        <div className={styles.HeartContainer}>
          <Heart
            isClick={isLiked}
            onClick={() => dispatch(switchLike(animal.id))}
          />
        </div>
        <div
          className={styles.TrashIconContainer}
          onClick={() => dispatch(deleteAnimal(animal.id))}
        >
          <TrashIcon />
        </div>
        <Typography.Title className={styles.CardTitle} view="small" tag="div">
          {animal.name}
        </Typography.Title>
        <Typography.Text className={styles.CardText} tag="div">
          <b>Latin name:</b> {animal.latin_name}
        </Typography.Text>
        <Typography.Text className={styles.CardText} tag="div">
          <b>Animal type:</b> {animal.animal_type}
        </Typography.Text>
        <Typography.Text className={styles.CardText} tag="div">
          <b>Habitat:</b> {animal.habitat}
        </Typography.Text>
        <Typography.Text className={styles.CardText} tag="div">
          <b>Diet:</b> {animal.diet}
        </Typography.Text>
        <Typography.Text className={styles.CardText} tag="div">
          <b>Geo range:</b> {animal.geo_range}
        </Typography.Text>
        <Typography.Text className={styles.CardText} tag="div">
          <b>Lifespan:</b> {animal.lifespan}
        </Typography.Text>
        <Typography.Text className={styles.CardText} tag="div">
          <b>Length:</b> Between {animal.length_min} ft. and {animal.length_max}{" "}
          ft.
        </Typography.Text>
        <Typography.Text className={styles.CardText} tag="div">
          <b>Weight:</b> Between {animal.weight_min} lbs. and{" "}
          {animal.weight_max} lbs.
        </Typography.Text>
      </div>
    </div>
  );
};
