import { useEffect } from "react";
import { useDispatch } from "react-redux";

import { Content } from "../Content";
import { Header } from "../Header";
import { fetchAnimals } from "../../store/animals/actions";
import { Filters } from "../Filters";
import { LoadButton } from "../LoadButton";

export const App = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchAnimals());
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <>
      <Header />
      <Filters />
      <Content />
      <LoadButton />
    </>
  );
};
