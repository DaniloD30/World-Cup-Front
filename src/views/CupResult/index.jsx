import React from "react";
import Header from "../../components/app/header/Header";
import ResultCup from "../../components/ResultCup/ResultCup";
const CupResult = () => {
  return (
    <>
      <Header
        subTitle={"Resultado Final"}
        description={
          "Veja o resultado final do Campeonato de filmes de forma simples e rápida"
        }
      />
      <ResultCup />
    </>
  );
};

export default CupResult;
