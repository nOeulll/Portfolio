import React from "react";
import { Col, Row } from "react-bootstrap";
import {
  DiJavascript1,
  DiReact,
  DiPython,
  DiHtml5,
  DiCss3,
  DiJava,
} from "react-icons/di";
import { SiTypescript, SiRedux } from "react-icons/si";
import reduxsaga from "../../Assets/reduxsaga.svg"

function LanguagesAndFramworks() {
  return (
    <>
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      <Col xs={4} md={2} className="tech-icons">
        <div className="skill_grade_best"></div>
        <DiHtml5 />
        <span className="stack_name">HTML5</span>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <div className="skill_grade_best"></div>
        <DiCss3 />
        <span className="stack_name">CSS3</span>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <div className="skill_grade_good"></div>
        <DiJavascript1 />
        <span className="stack_name">JavaScript</span>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <div className="skill_grade_good"></div>
        <SiTypescript />
        <span className="stack_name">TypeScript</span>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <div className="skill_grade_good"></div>
        <DiPython />
        <span className="stack_name">Python</span>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <div className="skill_grade_good"></div>
        <DiJava />
        <span className="stack_name">Java</span>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <div className="skill_grade_good"></div>
        <DiReact />
        <span className="stack_name">React</span>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <div className="skill_grade_good"></div>
        <DiReact />
        <span className="stack_name">React-Native</span>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <div className="skill_grade_once"></div>
        <SiRedux className="tech-icon-redux"/>
        <span className="stack_name">Redux</span>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <div className="skill_grade_once"></div>
        <img src={reduxsaga} className="tech-icon-download" alt="reduxsaga" />
        <span className="stack_name">Redux-saga</span>
      </Col>
    </Row>
    </>
  );
}



export default LanguagesAndFramworks;
