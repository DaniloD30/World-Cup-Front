import React from "react";
import Header from "../../components/app/header/Header";
import MoviesList from "../../components/MoviesList/MoviesList";
const Movies = () => {
  return (
    <>
      <Header
        subTitle={"Fase de Seleção"}
        description={
          "Selecione 8 filmes que você deseja que entrem na competição e depois pressione o"
        }
        description2={"botão Gerar Meu Campeonato para prosseguir"}
      />
      <MoviesList />
    </>
  );
};

export default Movies;
