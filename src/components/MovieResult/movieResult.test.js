import React from "react";
import { shallow, mount } from "enzyme";
import Component from "./MovieResult";
describe("Movie Result", () => {
  it("renders three <Component /> components", () => {
    const wrapper = shallow(
      <Component
        ordem="{index + 1}"
        title="{item?.titulo}"
        nota="{item?.nota}"
      />
    );
    expect(wrapper.find(Component)).toHaveLength(0);
  });

  it("renders three <Component /> components", () => {
    const wrapper = mount(
      <Component
        ordem="{index + 1}"
        title="{item?.titulo}"
        nota="{item?.nota}"
      />
    );
    expect(wrapper.find(Component)).toHaveLength(1);
  });
});
