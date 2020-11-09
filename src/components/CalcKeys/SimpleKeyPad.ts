import { ButtonType } from "../Button/Button";
import { KeyPad, KeyPadSection } from "./KeyPad";

const TopRow = (): KeyPadSection => {
  return {
    buttons: [
      {
        display: "\u00D7",
        buttonType: ButtonType.operation,
        cbFun: () => {
          console.log("multiply");
        },
      },
      {
        display: "/",
        buttonType: ButtonType.operation,
        cbFun: () => {
          console.log("divide");
        },
      },
      {
        display: "+",
        buttonType: ButtonType.operation,
        cbFun: () => {
          console.log("add");
        },
      },
      {
        display: "-",
        buttonType: ButtonType.operation,
        cbFun: () => {
          console.log("subtract");
        },
      },
    ],
    defButtonStyle: "w-1/4 px-3 py-3 bg-gray-200 border-none outline-none active:bg-gray-600",
    sectionStyle: "flex flex-row w-full h-auto",
  };
};

const NumberPadSection = (): KeyPadSection => {
  return {
    buttons: [],
    childSectionStyle: "flex flex-row flex-wrap w-full",
    childSections: [
      {
        buttons: [
          { buttonType: ButtonType.number, display: "9", value: 9 },
          { buttonType: ButtonType.number, display: "8", value: 8 },
          { buttonType: ButtonType.number, display: "7", value: 7 },
          { buttonType: ButtonType.number, display: "6", value: 6 },
          { buttonType: ButtonType.number, display: "5", value: 5 },
          { buttonType: ButtonType.number, display: "4", value: 4 },
          { buttonType: ButtonType.number, display: "3", value: 3 },
          { buttonType: ButtonType.number, display: "2", value: 2 },
          { buttonType: ButtonType.number, display: "1", value: 1 },
          { buttonType: ButtonType.number, display: "0", value: 0 },
          { buttonType: ButtonType.number, display: ".", value: "." },
          {
            display: "AC",
            buttonType: ButtonType.operation,
            cbFun: () => {
              console.log("clear all");
            },
          },
        ],
        defButtonStyle: "w-1/3 px-3 py-3 border-none outline-none active:bg-gray-600 bg-white-600",
        sectionStyle: "flex flex-row-reverse flex-wrap w-3/4"
      },
      {
        buttons: [
          {
            display: "=",
            buttonType: ButtonType.operation,
            cbFun: () => {
              console.log("equal to");
            },
          },
        ],
        defButtonStyle: "w-full px-3 py-3 bg-orange-600 border-none outline-none active:bg-orange-300",
        sectionStyle: "flex flex-row w-1/4"
      },
    ],
  };
};

const SimpleKeyPadLayout = (): KeyPad => {
  return {
    sections: [TopRow(), NumberPadSection()],
  };
};

export default SimpleKeyPadLayout;
