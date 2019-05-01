import { Normalize } from "@smooth-ui/core-em";
import React from "react";
import { useGlobalState } from "../../../application/provider";
import { Header } from "../../component/Header";
import { AppOuter, HeaderOuter, MainOuter } from "./element";

export type IndexComponentType = {
  isSettingPage: boolean;
};
export const IndexPageComponent = ({ isSettingPage }: IndexComponentType) => {
  return (
    <AppOuter>
      <Normalize />
      <HeaderOuter>
        <Header />
      </HeaderOuter>
      <MainOuter>
        <div>test</div>
      </MainOuter>
    </AppOuter>
  );
};

export const IndexPage = () => {
  const isSettingPage = useGlobalState("hoge");
  return <IndexPageComponent isSettingPage={isSettingPage} />;
};
