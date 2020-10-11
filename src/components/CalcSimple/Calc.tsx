import React from "react";
import Display from "../CalcDisplay/Display";
import Keys from "../CalcKeys/KeyPadLayout";
import SimpleKeyPadLayout from "../CalcKeys/SimpleKeyPad";

const Calc = () => {
  return (
    <div className="shadow-lg w-64">
      <Display />
      <Keys layout={SimpleKeyPadLayout()} />
    </div>
  );
};

export default Calc;
