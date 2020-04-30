import React from "react";
import { mount, shallow } from "enzyme";

import { ThemeProvider } from "@orchard/theme/theme-provider";
import { ThemeModeEnum } from "@orchard/theme/enums/themeModeEnum";

import theme from "@/theme";

const removeProperties = () => {
  const keys = ["theme", "styledTheme"];

  return {
    test: (val) => {
      return (
        val &&
        typeof val === "object" &&
        "props" in val &&
        Object.keys(val.props).some((prop) => keys.some((key) => key === prop))
      );
    },
    print: (val, serialize) => {
      keys.forEach((key) => {
        delete val.props[key];
      });
      return serialize(val);
    },
  };
};

export const shallowWithTheme = (children) => 
  shallow(
    <ThemeProvider theme={theme} mode={ThemeModeEnum.DARK}>
      {children}
    </ThemeProvider>
  )
  .dive()
  .shallow();

export const mountWithTheme = (children) => {
  expect.addSnapshotSerializer(removeProperties());
  
  return mount(
    <ThemeProvider theme={theme} mode={ThemeModeEnum.DARK}>
      {children}
    </ThemeProvider>
  );
};
