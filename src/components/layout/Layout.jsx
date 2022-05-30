import React from "react";
import Button from "../button/Button";
import Display from "../display/Display";
import { LayoutWrapper } from "./layoutStyle";

const Layout = () => {
  return (
    <LayoutWrapper>
      <Display />
      <Button />
    </LayoutWrapper>
  );
};

export default Layout;
