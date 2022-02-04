import styled, { css } from "styled-components";

const defaultStyledButton = styled.button`
  display: inline-block;
  font-weight: 400;
  text-align: center;
  vertical-align: middle;
  border: 1px solid transparent;
  padding: ${(props) =>
    props.size === "lg" ? "0.5rem 1rem" : ".4rem 0.75rem"};
  font-size: ${(props) => (props.size === "lg" ? "1.25rem" : "1rem")};
  font-size: 1.25rem;
  line-height: 1.5;
  border-radius: 0.3rem;
  transition: 0.3s;
  &:disabled {
    opacity: 0.5;
    cursor: not-allowed;
  }
`;

const StyledButton = styled(defaultStyledButton)`
  background-color: ${(props) => props.theme[props.variant].backgroundColor};
  border-color: ${(props) => props.theme[props.variant].borderColor};
  color: ${(props) => props.theme[props.variant].color};
`;

export { StyledButton };
