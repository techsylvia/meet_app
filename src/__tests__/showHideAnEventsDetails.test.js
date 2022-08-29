import { loadFeature, defineFeature } from "jest-cucumber";
import React from "react";
import { mount } from "enzyme";
import App from "../App";

const feature = loadFeature("./src/features/showHideAnEventDetails.feature");

defineFeature(feature, (test) => {
  let AppWrapper;
  //TEST 1
  test("An event element is collapsed by default.", ({ given, when, then }) => {
    given(
      "A collapsed event element containing events is loaded on the page.",
      () => {}
    );

    when("The user opens the app and performs no action.", () => {
      AppWrapper = mount(<App />);
    });

    then("The event element is collapsed by default.", () => {
      AppWrapper.update();
      expect(AppWrapper.find(".event .event-details")).toHaveLength(0);
    });
  });
});
