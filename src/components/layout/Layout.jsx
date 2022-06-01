import React from "react";
import Button from "../button/Button";
import Display from "../display/Display";
import { LayoutContainer, LayoutWrapper } from "./layoutStyle";

const Layout = () => {
  return (
    <LayoutWrapper>
      <LayoutContainer>
        <Display />
        <Button />
      </LayoutContainer>
    </LayoutWrapper>
  );
};

export default Layout;
