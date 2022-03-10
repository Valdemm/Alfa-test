import { Switch } from "@alfalab/core-components/switch";
import { useDispatch, useSelector } from "react-redux";

import { switchShowOnlyLikedAnimals } from "../../store/animals/actions";
import { showOnlyLikedAnimalsSelector } from "../../store/animals/selectors";

import styles from "./Filters.module.css";

export const Filters = () => {
  const dispatch = useDispatch();
  const showOnlyLikedAnimals = useSelector(showOnlyLikedAnimalsSelector);

  return (
    <div className={styles.Filters}>
      <Switch
        checked={showOnlyLikedAnimals}
        label="Show liked animals"
        onChange={() => dispatch(switchShowOnlyLikedAnimals())}
      />
    </div>
  );
};
