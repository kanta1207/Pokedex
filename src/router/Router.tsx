import { FC, memo } from "react";
import { Route, Routes } from "react-router-dom";
import { Home } from "../components/pages/Home";
import { TypeSearchPage } from "../components/pages/TypeSearchPage";
import { usePokemonTypeArr } from "../hooks/usePokemonTypeArr";

export const Router: FC = memo(() => {
  const {pokemonType} = usePokemonTypeArr()
  return (
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path={`/${pokemonType}`} element={<TypeSearchPage />}/>
        </Routes>
  );
});
