import React from "react";
import { StyledButton } from "./Button.styled";

const Button = (props) => {
  const { size, variant } = props;
  console.log(props);
  return (
    <StyledButton size={size} variant={variant}>
      {props.children}
    </StyledButton>
  );
};

export default Button;
