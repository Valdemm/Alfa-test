import { Button } from "@alfalab/core-components/button";
import { useDispatch } from "react-redux";
import { fetchAnimals } from "../../store/animals/actions";

import styles from "./LoadButton.module.css";

export const LoadButton = () => {
  const dispatch = useDispatch();

  const loadMoreAnimals = () => dispatch(fetchAnimals());

  return (
    <div className={styles.LoadButtonContainer} onClick={loadMoreAnimals}>
      <Button view="primary">Load more animals</Button>
    </div>
  );
};
