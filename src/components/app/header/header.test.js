import React from "react";
import { shallow, mount } from "enzyme";
import Component from "./Header";

describe("Header", () => {
  it("renders three <Component /> components", () => {
    const wrapper = shallow(
      <Component
        subTitle={"Fase de Seleção"}
        description={
          "Selecione 8 filmes que você deseja que entrem na competição e depois pressione o"
        }
        description2={"botão Gerar Meu Campeonato para prosseguir"}
      />
    );
    expect(wrapper.find(Component)).toHaveLength(0);
  });

  it("renders three <Component /> components", () => {
    const wrapper = mount(
      <Component
        subTitle={"Fase de Seleção"}
        description={
          "Selecione 8 filmes que você deseja que entrem na competição e depois pressione o"
        }
        description2={"botão Gerar Meu Campeonato para prosseguir"}
      />
    );
    expect(wrapper.find(Component)).toHaveLength(1);
  });
});
