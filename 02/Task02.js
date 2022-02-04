import React from "react";
import Button from "../src/components/Button/Button";
import { Row, Col, Button as RBButton } from "react-bootstrap";
import { ThemeProvider } from "styled-components";
import { variants } from "../themes/buttonThemes";
const Task02 = () => {
  return (
    <Row>
      <Col>
        <RBButton variant="primary" size="lg">
          Button!
        </RBButton>
      </Col>
      <Col>
        <ThemeProvider theme={variants}>
          <Button size="lg" variant="primary">
            Button!
          </Button>
        </ThemeProvider>
      </Col>
    </Row>
  );
};
export default Task02;
