import React from "react";
import { StyledAlert } from "./Alert.styled";
import { useContext } from "react";
import variantsTheme from "../../../themes/variantsTheme";

const Alert = (props) => {
  const variants = useContext(variantsTheme);

  return (
    <StyledAlert setVariant={props.variant} variantsList={variants}>
      {props.children}
    </StyledAlert>
  );
};

export default Alert;
