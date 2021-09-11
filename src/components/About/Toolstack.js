import React from "react";
import { Col, Row } from "react-bootstrap";
import {
  SiVisualstudiocode,
  SiJupyter,
  SiPostman,
  SiAndroidstudio,
  SiGitkraken,
  SiSlack,
  SiNotion,
} from "react-icons/si";
import { DiGit, } from "react-icons/di";
function Toolstack() {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      <Col xs={4} md={2} className="tech-icons">
        <DiGit />
        <span className="stack_name">GIt</span>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiGitkraken />
        <span className="stack_name">GitKraken</span>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiVisualstudiocode />
        <span className="stack_name">VSCode</span>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiSlack />
        <span className="stack_name">Slack</span>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiNotion />
        <span className="stack_name">Notion</span>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiPostman />
        <span className="stack_name">Postman</span>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiJupyter />
        <span className="stack_name">Jupyter Notebook</span>
      </Col>
    </Row>
  );
}

export default Toolstack;
