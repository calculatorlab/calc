import React from "react";
import Display from "../CalcDisplay/Display";
import Keys from "../CalcKeys/KeyPadLayout";
import SimpleKeyPadLayout from "../CalcKeys/SimpleKeyPad";

const Calc = () => {
  return (
    <div className="h-auto overflow-hidden rounded-lg shadow-xs">
      <Display />
      <Keys layout={SimpleKeyPadLayout()} />
    </div>
  );
};

export default Calc;
