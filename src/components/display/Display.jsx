import React, { useContext } from "react";
import { DisplayWrapper } from "./displayStyle";
import { CalcContext } from "../../context/CalcContext";

const Display = () => {
  const { calcDisplay } = useContext(CalcContext);
  return (
    <DisplayWrapper>
      <p>{calcDisplay}</p>
    </DisplayWrapper>
  );
};

export default Display;
