import { Typography } from "@alfalab/core-components/typography";

import styles from "./Header.module.css";

export const Header = () => {
  return (
    <div className={styles.Header}>
      <Typography.Title className={styles.HeaderTitle} view="medium" tag="div">
        Animal Zoo
      </Typography.Title>
    </div>
  );
};
