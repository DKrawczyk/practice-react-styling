import React from "react";

import Alert from "./../src/components/Alert";
import { Row, Col, Alert as RBAlert } from "react-bootstrap";
import variants from "../themes/variantsTheme";
import { TasksContext } from "../../project task-react-modern/src/context";

const Task01 = () => {
  return (
    <Row>
      <Col>
        <RBAlert variant="primary">
          Uwaga! <em>Styled Components</em> nadchodzi!
        </RBAlert>
      </Col>
      <Col>
        <TasksContext.Provider value={variants}>
          <Alert variant="primary">
            Uwaga! <em>Styled Components</em> nadchodzi!
          </Alert>
        </TasksContext.Provider>
      </Col>
    </Row>
  );
};

export default Task01;
