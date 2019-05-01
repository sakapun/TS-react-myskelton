import { Box } from "@smooth-ui/core-em";
import React, { useCallback } from "react";
import { Button } from "../Button";
import { AppNameBox, Outer } from "./element";

export type HeaderComponentType = {};

export const HeaderComponent = (props: HeaderComponentType) => {
  return (
    <Outer>
      <AppNameBox>app name</AppNameBox>
      <Box flex={1} />
      <Button>ログアウト</Button>
    </Outer>
  );
};

export const Header = () => {
  return <HeaderComponent />;
};
