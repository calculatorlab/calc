import { ButtonType } from "../Button/Button";

export interface KeyPadSection {
  buttons: ReadonlyArray<KeyPadButton>;
  sectionStyle?: string;
  defButtonStyle?: string;
  childSectionStyle?: string;
  childSections?: KeyPadSection[];
}
export interface KeyPadButton {
  display: string;
  value?: number | string;
  buttonStyle?: string;
  cbFun?: () => void;
  buttonType: ButtonType;
}

export interface KeyPad {
  sections: ReadonlyArray<KeyPadSection>;
}
