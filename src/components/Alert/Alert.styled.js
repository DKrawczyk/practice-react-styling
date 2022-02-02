import styled from "styled-components";

const defaultStyle = styled.div`
  display: block;
  position: relative;
  padding: 0.75rem 1.25rem;
  margin-bottom: 1rem;
  border: 1px solid transparent;
  border-radius: 0.25rem;
`;

const StyledAlert = styled(defaultStyle)`
  background-color: ${(props) =>
    props.variantsList[props.setVariant].backgroundColor};
`;

export { StyledAlert };
