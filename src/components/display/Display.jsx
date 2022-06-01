import React, { useContext } from "react";
import { DisplayWrapper } from "./displayStyle";
import { CalcContext } from "../../context/CalcContext";

const Display = () => {
  const { calcDisplay } = useContext(CalcContext);
  return (
    <DisplayWrapper>
      <input type="text" placeholder="0" readOnly value={calcDisplay} />
    </DisplayWrapper>
  );
};

export default Display;
