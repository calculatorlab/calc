import React from "react";

export enum ButtonType {
  number = "NUMBER",
  operation = "OPERATION",
}

const Button: React.FC<{
  val: string;
  type?: ButtonType;
  className?: string;
}> = ({ val, type = ButtonType.operation, className }) => {
  console.log("Rendering button of type: " + type);
  return <div className={className}>{val}</div>;
};

export default Button;
