import React from "react";
import { Col, Row } from "react-bootstrap";
import {
  SiAdobephotoshop,
  SiAdobexd,
  SiAdobepremiere,
  SiAdobeaftereffects,
  SiAdobeindesign,
  SiAdobeillustrator,
} from "react-icons/si";
import { FiFigma, } from "react-icons/fi";
function ForDesignstack() {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      <Col xs={4} md={2} className="tech-icons">
        <FiFigma />
        <span className="stack_name">Figma</span>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiAdobexd />
        <span className="stack_name">Xd</span>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiAdobephotoshop />
        <span className="stack_name">Photoshop</span>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiAdobeillustrator />
        <span className="stack_name">Illustrator</span>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiAdobeindesign />
        <span className="stack_name">Indesign</span>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiAdobepremiere />
        <span className="stack_name">Premiere Pro</span>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiAdobeaftereffects />
        <span className="stack_name">After Effects</span>
      </Col>
    </Row>
  );
}

export default ForDesignstack;
