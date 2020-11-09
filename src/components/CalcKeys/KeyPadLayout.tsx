import React from "react";
import { KeyPad, KeyPadSection } from "./KeyPad";
import { v4 as uuid } from "uuid";
import Button from "../Button/Button";
import { chooseOneClassName } from "../../util/classNames";

const KeyPadSectionLayout: React.FC<{ layout: KeyPadSection }> = ({
  layout,
}) => {
  return (
    <div className={layout.sectionStyle}>
      {layout.buttons.map((n) => (
        <Button
          key={uuid()}
          val={n.display}
          type={n.buttonType}
          className={chooseOneClassName(n.buttonStyle, layout.defButtonStyle)}
        />
      ))}
      {layout.childSections ? (
        <div className={layout.childSectionStyle}>
          {layout.childSections.map((c) => (
            <KeyPadSectionLayout key={uuid()} layout={c} />
          ))}
        </div>
      ) : null}
    </div>
  );
};

const KeyPadLayout: React.FC<{ layout: KeyPad }> = ({ layout }) => {
  return (
    <div className="bg-gray-200">
      {layout.sections.map((s) => (
        <KeyPadSectionLayout key={uuid()} layout={s} />
      ))}
    </div>
  );
};

export default KeyPadLayout;
