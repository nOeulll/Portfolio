import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Github from "./Github";
import Techstack from "./Techstack";
import Aboutcard from "./AboutCard";
import collabo from "../../Assets/collabo.svg";
import Toolstack from "./Toolstack";
import LanguagesAndFramworks from "./Techstack";
import ForDesignstack from "./ForDesignstack";
import { BsFillQuestionCircleFill } from "react-icons/bs";

function About() {
  return (
    <Container fluid className="about-section">
      <Container>
        <Row style={{ justifyContent: "center", padding: "10px" }}>
          <Col
            md={7}
            style={{
              justifyContent: "center",
              paddingTop: "30px",
              paddingBottom: "50px",
            }}
          >
            <h1 style={{ fontSize: "2.1em", paddingBottom: "20px" }}>
              Know Who <strong className="purple">I'M</strong>
            </h1>
            <Aboutcard />
          </Col>
          <Col
            md={5}
            style={{ paddingTop: "120px", paddingBottom: "50px" }}
            className="about-img"
          >
            <img src={collabo} alt="about" className="mimoji" />
          </Col>
        </Row>
        <div className="skill_info">
          <div className="question_circle">
            <BsFillQuestionCircleFill />
          </div>
          <ul className="question_circle_info_list">
            <li className="question_circle_info">
              <div className="skill_grade_best_info"></div>
              <div className="grade_info">자신있게 다룰 수 있는</div>
            </li>
            <li className="question_circle_info">
              <div className="skill_grade_good_info"></div>
              <div className="grade_info">취미 수준</div>
            </li>
            <li className="question_circle_info">
              <div className="skill_grade_once_info"></div>
              <div className="grade_info">한번쯤 써본</div>
            </li>
          </ul>
        </div>
        <h1 className="project-heading">
          <strong className="purple">Skillset </strong>
        </h1>

        <LanguagesAndFramworks />

        <h1 className="project-heading">
          <strong className="purple">Tools</strong> I use
        </h1>
        <Toolstack />

        <h1 className="project-heading">
          <strong className="purple">Tools</strong> for Design
        </h1>
        <ForDesignstack />

        <Github />
      </Container>
    </Container>
  );
}

export default About;
