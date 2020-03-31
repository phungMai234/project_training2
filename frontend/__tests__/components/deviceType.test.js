import React from "react";
import DeviceType from "../../src/components/deviceType/deviceType";
import renderer from "react-test-renderer";

describe("components", () => {
  it('render pie chart device types', () => {
    const pieChart = renderer.create(<DeviceType/>).toJSON();
    expect(pieChart).toMatchSnapshot();
  })
})
