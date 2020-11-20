import React from "react";
import { shallow, mount } from "enzyme";
import Component from "./circularProgress";

describe("Circular Progress Index", () => {
  it("renders three <Component /> components", () => {
    const wrapper = shallow(<Component loading={false} />);
    expect(wrapper.find(Component)).toHaveLength(0);
  });

  it("renders three <Component /> components", () => {
    const wrapper = mount(<Component loading={false} />);
    expect(wrapper.find(Component)).toHaveLength(1);
  });
});
